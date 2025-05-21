import { Injectable } from '@nestjs/common';
import { CreateLikeMusiсDto } from './dto/create-like-musiс.dto';

@Injectable()
export class MusiсService {
  create(createMusiсDto: CreateLikeMusiсDto) {
    return 'This action adds a new musiс';
  }

  findAll() {
    return `This action returns all musiс`;
  }

  remove(id: number) {
    return `This action removes a #${id} musiс`;
  }
}
