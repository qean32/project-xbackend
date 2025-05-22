import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  login(AuthDto: AuthDto) {
    return 'This action adds a new auth';
  }

  registration(CreateUserDto: CreateUserDto) {
    return `This action returns all auth`;
  }
}
