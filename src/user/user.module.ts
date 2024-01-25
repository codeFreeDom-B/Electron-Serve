/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:52:35
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 13:31:57
 * @FilePath: \electron-serve\src\user\user.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
