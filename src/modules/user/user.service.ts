import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/utils/base.service';
import { User } from './user.entity';
import { Role } from './user.enum';
import { AdminService } from '../admin/admin.service';
import { CreateUserDto, FindUserDto } from './user.dto';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly adminService: AdminService,
  ) {
    super(userRepository);
  }

  async create(entity: CreateUserDto): Promise<User> {
    const user = new User();
    user.username = entity.username;
    user.role = entity.role;

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(entity.password, salt);
    user.password = hashedPassword;

    switch (entity.role) {
      case Role.Admin:
        user.admin = await this.adminService.create(entity.admin);
        break;
      case Role.Driver:
        break;
      case Role.ServicePersonnel:
        break;
      case Role.Customer:
      default:
        break;
    }
    return super.create(user);
  }

  async findOne(entity: FindUserDto): Promise<User> {
    const role = entity.role;
    const user = await super.findOne(
      { username: entity.username },
      {
        admin: role === Role.Admin,
        driver: role === Role.Driver,
        servicePersonnel: role === Role.ServicePersonnel,
        customer: role === Role.Customer,
      },
    );
    if (!user) throw new UnauthorizedException();

    const isPasswordValid = await bcrypt.compare(
      entity.password,
      user.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException();

    return user;
  }
}
