/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:50:04
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 16:53:18
 * @FilePath: \electron-serve\src\auth\auth.service.ts
 * @Description:
 */
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import jwtConfig from '../config/jwt.config';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { Users } from 'src/user/entities/user.entity';
import { HashingService } from './hashing.service';
import { ActiveUserData } from './interfaces/active-user-data.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingService: HashingService,
  ) {}

  // 注册
  async signUp(signUpDto: SignUpDto) {
    const { name, password } = signUpDto;

    const existingUser = await this.userRepository.findOne({
      where: [{ name }],
    });

    if (existingUser) throw new UnauthorizedException('该用户已存在');

    const hashedPassword = await this.hashingService.hash(password); // +
    console.log(hashedPassword, 'hashedPassword');

    const user = this.userRepository.create({
      ...signUpDto,
      password: hashedPassword,
    }); // +
    return this.userRepository.save(user);
  }
  // 登录
  async signIn(signInDto: SignInDto) {
    // TODO sign in
    const { name, password } = signInDto;
    const existingUser = await this.userRepository.findOne({
      where: [{ name }],
    });
    if (!existingUser)
      return new UnauthorizedException('该用户不存在,请检查账号');
    const isEqual = await this.hashingService.compare(
      password,
      existingUser.password,
    );
    if (!isEqual) return new UnauthorizedException('用户名/密码不正确');
    return await this.generateTokens(existingUser);
  }
  //生成token
  async generateTokens(user: Users) {
    const token = await this.signToken<Partial<ActiveUserData>>(user.id, {
      name: user.name,
    });
    return { token };
  }

  private async signToken<T>(userId: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub: userId,
        ...payload,
      },
      {
        secret: this.jwtConfiguration.secret,
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );
  }
}
