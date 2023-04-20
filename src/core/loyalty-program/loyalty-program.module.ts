import { LoyaltyProgramController } from './loyalty-program.controller';
import { LoyaltyProgramService } from './loyalty-program.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LoyaltyProgram } from './loyalty-program.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoyaltyProgram])],
  controllers: [LoyaltyProgramController],
  providers: [LoyaltyProgramService],
  exports: [],
})
export class LoyaltyProgramModule {}
