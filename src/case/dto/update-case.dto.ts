import { PartialType } from '@nestjs/mapped-types';
import { CreateCaseDto } from './create-case.dto';

export class UpdateCaseDto extends PartialType(CreateCaseDto) {
  readonly name: string;
  readonly password: string;
  readonly backgrounUrl: string;
}
