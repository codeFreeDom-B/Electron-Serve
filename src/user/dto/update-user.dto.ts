/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:52:35
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 13:07:09
 * @FilePath: \electron-serve\src\user\dto\update-user.dto.ts
 * @Description:
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
