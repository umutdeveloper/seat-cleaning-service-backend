import { MapPipe, MapInterceptor } from '@automapper/nestjs';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { User } from 'src/core/user/user.entity';
import { LoginDto, LoginResponseDto, RegisterDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LoginResponse } from './auth.model';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async create(@Body(MapPipe(RegisterDto, User)) body: User) {
    await this.authService.register(body);
  }

  @Post('login')
  @UseInterceptors(MapInterceptor(LoginResponse, LoginResponseDto))
  @HttpCode(HttpStatus.OK)
  async findOne(@Body(MapPipe(LoginDto, User)) body: User) {
    return this.authService.login(body);
  }
}
