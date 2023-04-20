import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { Business } from './business.entity';

@Injectable()
export class BusinessService extends BaseService<Business> {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {
    super(businessRepository);
  }
}
