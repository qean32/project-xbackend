import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MusiсService } from './musiс.service';
import { AddToPlayListDto, CreateLikeMusiсDto, CreatePlaylistDto } from './dto/';

@Controller('musiс')
export class MusiсController {
  constructor(private readonly musiсService: MusiсService) { }

  @Post('creat-like')
  createLike(@Body() CreateLikeMusiсDto: CreateLikeMusiсDto) {
    return this.musiсService.createLike(CreateLikeMusiсDto);
  }

  @Delete('remove-like/:id')
  deleteLike(@Param('id') id: string) {
    return this.musiсService.deleteLike(+id);
  }

  @Get('search/:query')
  search(@Param('query') query: string) {
    return this.musiсService.search(query);
  }

  @Post('create-playlist')
  createPlaylist(@Body() CreatePlaylistDto: CreatePlaylistDto) {
    return this.musiсService.createPlaylist(CreatePlaylistDto)
  }

  @Post('add-to-playlist')
  addToPlaylist(@Body() AddToPlayListDto: AddToPlayListDto) {
    return this.musiсService.addToPlaylist(AddToPlayListDto)
  }
}
