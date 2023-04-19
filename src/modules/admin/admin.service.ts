import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/utils/base.service';
import { Admin } from './admin.entity';

@Injectable()
export class AdminService extends BaseService<Admin> {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
  ) {
    super(adminRepository);
  }

  async create(entity: Admin): Promise<Admin> {
    const admins = await super.findAll();
    if (admins.length) throw new UnauthorizedException();

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(entity.password, salt);
    entity.password = hashedPassword;
    return super.create(entity);
  }

  async findOne(entity: FindOptionsWhere<Admin>): Promise<Admin> {
    const admin = await super.findOne({ username: entity.username });
    if (!admin) throw new UnauthorizedException();

    const isPasswordValid = await bcrypt.compare(
      entity.password as string,
      admin.password,
    );
    if (!isPasswordValid) throw new UnauthorizedException();

    return admin;
  }
}
