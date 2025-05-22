import { Injectable } from '@nestjs/common';
import { AddToPlayListDto, CreateLikeMusiсDto, CreatePlaylistDto } from './dto/';

@Injectable()
export class MusiсService {
  createLike(body: CreateLikeMusiсDto) {
    return 'This action adds a new musiс';
  }

  deleteLike(id: number) {
    return `This action removes a #${id} musiс`;
  }

  search(query: string) {
    return `This action removes a # musiс`;
  }

  createPlaylist(body: CreatePlaylistDto) {
    return 'zxc'
  }

  addToPlaylist(body: AddToPlayListDto) {
    return 'zxc'
  }
}
