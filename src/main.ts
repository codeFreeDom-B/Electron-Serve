/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 11:51:46
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-29 16:50:34
 * @FilePath: \electron-serve\src\main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
