import { Injectable } from '@nestjs/common';
import { AddToPlayListDto, CreateLikeMusiсDto, CreatePlaylistDto } from './dto/';

@Injectable()
export class MusiсService {
  async createLike(body: CreateLikeMusiсDto) {
    return 'This action adds a new musiс';
  }

  async deleteLike(id: number) {
    return `This action removes a #${id} musiс`;
  }

  async search(query: string) {
    return `This action removes a # musiс`;
  }

  async createPlaylist(body: CreatePlaylistDto) {
    return 'zxc'
  }

  async addToPlaylist(body: AddToPlayListDto) {
    return 'zxc'
  }
}
