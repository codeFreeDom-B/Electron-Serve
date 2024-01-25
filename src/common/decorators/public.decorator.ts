/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 17:01:53
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 17:02:00
 * @FilePath: \electron-serve\src\common\decorators\public.decorator.ts
 * @Description:
 */
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
