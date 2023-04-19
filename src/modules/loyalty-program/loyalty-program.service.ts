import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/utils/base.service';
import { LoyaltyProgram } from './loyalty-program.entity';

@Injectable()
export class LoyaltyProgramService extends BaseService<LoyaltyProgram> {
  constructor(
    @InjectRepository(LoyaltyProgram)
    private readonly LoyaltyProgramRepository: Repository<LoyaltyProgram>,
  ) {
    super(LoyaltyProgramRepository);
  }
}
