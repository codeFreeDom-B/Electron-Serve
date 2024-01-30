/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:49:36
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 18:18:29
 * @FilePath: \electron-serve\src\auth\auth.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import jwtConfig from '../config/jwt.config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Users } from 'src/user/entities/user.entity';
import { HashingService } from './hashing.service';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from './guards/access-token.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync(jwtConfig.asProvider()),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },

    AuthService,
    HashingService,
  ],
})
export class AuthModule {}
