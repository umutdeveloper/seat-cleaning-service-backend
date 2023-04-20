import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/utils/base.service';
import { User } from './user.entity';
import { Role } from './user.enum';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly adminService: AdminService,
  ) {
    super(userRepository);
  }

  async create(entity: User): Promise<User> {
    switch (entity.role) {
      case Role.Admin:
        entity.admin = await this.adminService.create(entity.admin);
        break;
      case Role.Driver:
        break;
      case Role.ServicePersonnel:
        break;
      case Role.Customer:
      default:
        break;
    }
    return super.create(entity);
  }

  async findOne(entity: User): Promise<User | null> {
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
    return user;
  }
}
