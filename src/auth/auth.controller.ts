import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  login(@Body() AuthDto: AuthDto) {
    return this.authService.login(AuthDto);
  }

  @Post('registration')
  registration(@Body() CreateUserDto: CreateUserDto) {
    return this.authService.registration(CreateUserDto);
  }
}
