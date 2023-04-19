import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { Redemption } from './redemption.entity';

@Injectable()
export class RedemptionService extends BaseService<Redemption> {
  constructor(
    @InjectRepository(Redemption)
    private readonly redemptionRepository: Repository<Redemption>,
  ) {
    super(redemptionRepository);
  }
}
