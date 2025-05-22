import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  login(@Body() AuthDto: AuthDto) {
    return this.authService.login(AuthDto);
  }

  @Post('registration')
  @UseInterceptors(FileInterceptor('image'))
  registration(@Body() createUserDto: CreateUserDto, @UploadedFile() ava: any) {
    return this.authService.regisatration(createUserDto, ava);
  }
}
