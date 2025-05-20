import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusiсService } from './musiс.service';
import { CreateMusiсDto } from './dto/create-musiс.dto';
import { UpdateMusiсDto } from './dto/update-musiс.dto';

@Controller('musiс')
export class MusiсController {
  constructor(private readonly musiсService: MusiсService) {}

  @Post()
  create(@Body() createMusiсDto: CreateMusiсDto) {
    return this.musiсService.create(createMusiсDto);
  }

  @Get()
  findAll() {
    return this.musiсService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musiсService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMusiсDto: UpdateMusiсDto) {
    return this.musiсService.update(+id, updateMusiсDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musiсService.remove(+id);
  }
}
