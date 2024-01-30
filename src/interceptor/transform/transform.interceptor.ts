/*
 * @Author: SUN HENG
 * @Date: 2024-01-29 16:48:39
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-29 16:52:40
 * @FilePath: \electron-serve\src\interceptor\transform\transform.interceptor.ts
 * @Description:
 */
// src/interception/transform.interception.ts

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        code: 200,
        data,
        message: 'success',
      })),
    );
  }
}
