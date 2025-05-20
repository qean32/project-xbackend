import { PartialType } from '@nestjs/mapped-types';
import { CreateMusiсDto } from './create-musiс.dto';

export class UpdateMusiсDto extends PartialType(CreateMusiсDto) {}
