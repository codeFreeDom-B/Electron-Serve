/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:50:13
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 18:27:35
 * @FilePath: \electron-serve\src\auth\auth.controller.ts
 * @Description:
 */
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { Public } from '../common/decorators/public.decorator';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }
  @Public()
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }
}
