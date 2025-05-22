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


  async findByLogin(login: string) {
    return this.prisma.user.findFirst({ where: { login } });
  }

  async findById(id: number) {
    return this.prisma.user.findFirst({ where: { id } });
  }

  async findMeny() {
    return this.prisma.user.findMany({ take: 10, skip: 0 });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ data: { ...updateUserDto }, where: { id } });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}
