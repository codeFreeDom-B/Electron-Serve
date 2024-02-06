/*
 * @Author: SUN HENG
 * @Date: 2024-01-31 16:45:02
 * @LastEditors: SUN HENG && 17669477887
 * @LastEditTime: 2024-02-06 16:43:29
 * @FilePath: \electron-serve\src\case\case.service.ts
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { CreateCaseDto } from './dto/create-case.dto';
import { Case } from './entities/case.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class CaseService {
  constructor(
    @InjectRepository(Case)
    private readonly CaseRepository: Repository<Case>,
  ) {}
  async create(createCaseDto: CreateCaseDto) {
    const user = await this.CaseRepository.create({
      ...createCaseDto,
    });
    return this.CaseRepository.save(user);
  }

  findAll() {
    return this.CaseRepository.find();
  }
}
