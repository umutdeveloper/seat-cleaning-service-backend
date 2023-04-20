import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { ServiceType } from './service-type.entity';

@Injectable()
export class ServiceTypeService extends BaseService<ServiceType> {
  constructor(
    @InjectRepository(ServiceType)
    private readonly serviceTypeRepository: Repository<ServiceType>,
  ) {
    super(serviceTypeRepository);
  }
}
