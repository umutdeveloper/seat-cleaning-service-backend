import { ServiceTypeController } from './service-type.controller';
import { ServiceTypeService } from './service-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ServiceType } from './service-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceType])],
  controllers: [ServiceTypeController],
  providers: [ServiceTypeService],
  exports: [],
})
export class ServiceTypeModule {}
