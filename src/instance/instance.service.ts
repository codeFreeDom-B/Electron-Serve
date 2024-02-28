/*
 * @Author: SUN HENG
 * @Date: 2024-02-06 09:54:12
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-07 15:06:07
 * @FilePath: \electron-serve\src\instance\instance.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
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
    if (thumbnail) {
      caseItem.backgroundUrl = thumbnail;
    }
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
    this.CaseReporsitory.update(InstanceItem.parentId, {
      backgroundUrl: updateInstanceDto.thumbnail,
    });

    return { code: 200, message: '保存成功' };
  }

  remove(id: number) {
    return `This action removes a #${id} instance`;
  }
}
