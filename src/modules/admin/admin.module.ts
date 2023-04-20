import { AdminService } from './admin.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [],
  providers: [AdminService],
  exports: [AdminService],
})
export class AdminModule {}
