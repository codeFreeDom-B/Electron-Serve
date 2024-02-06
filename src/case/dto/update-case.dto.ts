/*
 * @Author: SUN HENG
 * @Date: 2024-01-31 16:45:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 14:01:41
 * @FilePath: \electron-serve\src\case\dto\update-case.dto.ts
 * @Description:
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCaseDto } from './create-case.dto';

export class UpdateCaseDto extends PartialType(CreateCaseDto) {
  readonly name: string;
  readonly password: string;
  readonly backgroundUrl: string;
  readonly isPublish: boolean;
}
