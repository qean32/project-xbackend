import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusiсService } from './musiс.service';
import { CreateLikeMusiсDto } from './dto/create-like-musiс.dto';

@Controller('musiс')
export class MusiсController {
  constructor(private readonly musiсService: MusiсService) { }

  @Post()
  create(@Body() CreateLikeMusiсDto: CreateLikeMusiсDto) {
    return this.musiсService.create(CreateLikeMusiсDto);
  }

  @Get()
  findAll() {
    return this.musiсService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musiсService.remove(+id);
  }
}
