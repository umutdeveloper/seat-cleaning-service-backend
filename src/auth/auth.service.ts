import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminService } from 'src/core/admin/admin.service';
import { User } from 'src/core/user/user.entity';
import { Role } from 'src/core/user/user.enum';
import { UserService } from 'src/core/user/user.service';
import { LoginResponse } from './auth.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
  ) {}

  async register(entity: User): Promise<void> {
    if (entity.role === Role.Admin) {
      const admins = await this.adminService.findAll();
      if (admins.length) throw new UnauthorizedException();
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(entity.password, salt);
    entity.password = hashedPassword;
    await this.userService.create(entity);
  }

  async login(entity: User): Promise<LoginResponse> {
    const user = await this.userService.findOne(entity);
    if (!user) throw new UnauthorizedException();

    const isPasswordValid = await bcrypt.compare(
      entity.password,
      user.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException();

    const response = new LoginResponse();
    response.user = user;
    response.accessToken = await this.jwtService.signAsync({ sub: user.uuid });
    return response;
  }
}
