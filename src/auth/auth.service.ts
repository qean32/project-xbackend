import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) { }

  async regisatration(createUserDto: CreateUserDto, ava) {
    const user_ = await this.userService.findByLogin(createUserDto.email)
    if (user_) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(createUserDto.password, 5)
    const user = await this.userService.create({ ...createUserDto, password: hashPassword }, ava)

    // return this.generateToken({user.})
  }

  async login(authDto: AuthDto) {
    const user = await this.userService.findByLogin(authDto.email)
    // if (user && await bcrypt.compare(authDto.password, user.password)) {
    //   return this.generateToken(user)
    // }

    throw new HttpException('no', HttpStatus.BAD_REQUEST)
  }

  async generateToken({ email, id }: { email: string, id: number }) {
    return this.jwtService.sign({ email, id })
  }
}
