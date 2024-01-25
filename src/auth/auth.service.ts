/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:50:04
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 13:31:38
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

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    const { name, password } = signUpDto;

    const existingUser = await this.userRepository.findOne({
      where: [{ name }],
    });
    if (existingUser) throw new UnauthorizedException('User already exists');

    const user = this.userRepository.create(signUpDto);
    return this.userRepository.save(user);
  }

  async signIn(signInDto: SignInDto) {
    // TODO sign in
  }
}
