import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { ServicePersonnel } from './service-personnel.entity';

@Injectable()
export class ServicePersonnelService extends BaseService<ServicePersonnel> {
  constructor(
    @InjectRepository(ServicePersonnel)
    private readonly servicePersonnelRepository: Repository<ServicePersonnel>,
  ) {
    super(servicePersonnelRepository);
  }
}
