/*
 * @Author: SUN HENG
 * @Date: 2024-01-25 16:34:22
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-01-25 16:34:53
 * @FilePath: \electron-serve\src\auth\hashing.service.ts
 * @Description:
 */
import { Buffer } from 'node:buffer';
import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class HashingService {
  async hash(data: string | Buffer): Promise<string> {
    const salt = await genSalt();
    return hash(data, salt);
  }

  compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return compare(data, encrypted);
  }
}
