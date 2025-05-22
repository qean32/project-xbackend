import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }
  async create(body: CreateUserDto, ava: any) {
    return this.prisma.user.create({
      data: {
        ...body,
        ava: 'string | null',
        closeToken: 'string | null',
        openToken: 'string | null',
      }
    })
  }


  findByLogin(login: string) {
    return 'This action adds a new user';
  }

  findById(id: number) {
    return `This action returns a #${id} user`;
  }

  findMeny() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
