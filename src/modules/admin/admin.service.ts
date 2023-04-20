import { Injectable, UnauthorizedException } from '@nestjs/common';
import { BaseService } from 'src/utils/base.service';
import { Admin } from './admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './admin.dto';

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {
    super(adminRepository);
  }

  async create(entity: CreateAdminDto): Promise<Admin> {
    const admins = await super.findAll();
    if (admins.length) throw new UnauthorizedException();

    const admin = new Admin();
    admin.name = entity.name;
    return super.create(admin);
  }
}
