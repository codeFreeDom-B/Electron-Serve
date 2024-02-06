/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 11:52:13
 * @FilePath: \electron-serve\src\instance\instance.service.ts
 * @Description:
 */
import { Inject, Injectable } from '@nestjs/common';
import { CreateInstanceDto } from './dto/create-instance.dto';
import { UpdateInstanceDto } from './dto/update-instance.dto';
import { Repository } from 'typeorm';
import { Instance } from './entities/instance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Case } from 'src/case/entities/case.entity';
import { merge } from 'lodash';

@Injectable()
export class InstanceService {
  constructor(
    @InjectRepository(Instance)
    private readonly InstanceRepository: Repository<Instance>,
    @InjectRepository(Case)
    private readonly CaseReporsitory: Repository<Case>,
  ) {}
  async create(createInstanceDto: CreateInstanceDto) {
    const InstanceItem = await this.InstanceRepository.create({
      ...createInstanceDto,
    });
    this.InstanceRepository.save(InstanceItem);
    const { thumbnail, parentId } = createInstanceDto;
    const caseItem = await this.CaseReporsitory.findOneBy({
      id: parentId,
    });

    caseItem.backgrounUrl = thumbnail;
    this.CaseReporsitory.update(caseItem.id, caseItem);
    return { code: 200, message: '保存成功' };
  }

  async findOne(id: string) {
    const InstanceItem = await this.InstanceRepository.findOneBy({
      parentId: id,
    });
    return {
      InstanceItem,
    };
  }

  async update(id: number, updateInstanceDto: UpdateInstanceDto) {
    const InstanceItem = await this.InstanceRepository.findOneBy({
      id: id,
    });
    merge(InstanceItem, updateInstanceDto);
    this.InstanceRepository.save(InstanceItem);
    return { code: 200, message: '保存成功' };
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
