/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 10:41:37
 * @FilePath: \electron-serve\src\instance\instance.module.ts
 * @Description:
 */
import { Module } from '@nestjs/common';
import { InstanceService } from './instance.service';
import { InstanceController } from './instance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instance } from './entities/instance.entity';
import { Case } from 'src/case/entities/case.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Instance, Case])],
  controllers: [InstanceController],
  providers: [InstanceService],
})
export class InstanceModule {}
