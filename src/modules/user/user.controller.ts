import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CreateUserDto, FindUserDto } from './user.dto';
import { UserService } from './user.service';
import { Role } from './user.enum';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() body: CreateUserDto) {
    await this.userService.create(body);
  }

  @Get(':role')
  @HttpCode(HttpStatus.OK)
  async find(@Param() params: { role: Role }, @Body() body: FindUserDto) {
    return this.userService.findOne({ role: params.role, ...body });
  }
}
