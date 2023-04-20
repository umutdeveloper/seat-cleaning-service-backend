import { ServicePersonnelController } from './service-personnel.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ServicePersonnel } from './service-personnel.entity';
import { ServicePersonnelService } from './service-personnel.service';

@Module({
  imports: [TypeOrmModule.forFeature([ServicePersonnel])],
  controllers: [ServicePersonnelController],
  providers: [ServicePersonnelService],
  exports: [],
})
export class ServicePersonnelModule {}
