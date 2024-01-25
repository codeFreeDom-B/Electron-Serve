/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 12:46:59
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 13:06:25
 * @FilePath: \electron-serve\src\config\jwt.config.ts
 * @Description:
 */
import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUER,
    accessTokenTtl: parseInt(process.env.JWT_ACCESS_TOKEN_TTL ?? '3600', 10),
  };
});
