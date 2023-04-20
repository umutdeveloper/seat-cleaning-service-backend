import { RedemptionController } from './redemption.controller';
import { RedemptionService } from './redemption.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Redemption } from './redemption.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Redemption])],
  controllers: [RedemptionController],
  providers: [RedemptionService],
  exports: [],
})
export class RedemptionModule {}
