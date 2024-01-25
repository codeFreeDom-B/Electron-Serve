/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:52:35
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 14:08:26
 * @FilePath: \electron-serve\src\user\user.controller.ts
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post(':id')
  findOne(@Body() request: Request): string {
    console.log(request, 'request');

    return '123';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
