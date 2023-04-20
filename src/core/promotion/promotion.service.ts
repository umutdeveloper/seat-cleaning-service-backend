import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { Promotion } from './promotion.entity';

@Injectable()
export class PromotionService extends BaseService<Promotion> {
  constructor(
    @InjectRepository(Promotion)
    private readonly promotionRepository: Repository<Promotion>,
  ) {
    super(promotionRepository);
  }
}
