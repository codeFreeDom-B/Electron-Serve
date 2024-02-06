/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 10:37:14
 * @FilePath: \electron-serve\src\instance\dto\update-instance.dto.ts
 * @Description:
 */
import { PartialType } from '@nestjs/mapped-types';
import { CreateInstanceDto } from './create-instance.dto';

export class UpdateInstanceDto extends PartialType(CreateInstanceDto) {
  readonly parentId: string;
  readonly thumbnail: string;
  readonly GraphConfig: string;
}
