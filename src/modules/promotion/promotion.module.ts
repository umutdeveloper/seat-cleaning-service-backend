import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Promotion } from './promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion])],
  controllers: [PromotionController],
  providers: [PromotionService],
  exports: [],
})
export class PromotionModule {}
