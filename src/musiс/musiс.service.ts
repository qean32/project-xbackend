import { Injectable } from '@nestjs/common';
import { CreateMusiсDto } from './dto/create-musiс.dto';
import { UpdateMusiсDto } from './dto/update-musiс.dto';

@Injectable()
export class MusiсService {
  create(createMusiсDto: CreateMusiсDto) {
    return 'This action adds a new musiс';
  }

  findAll() {
    return `This action returns all musiс`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musiс`;
  }

  update(id: number, updateMusiсDto: UpdateMusiсDto) {
    return `This action updates a #${id} musiс`;
  }

  remove(id: number) {
    return `This action removes a #${id} musiс`;
  }
}
