import { AdminService } from './admin.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { AdminProfile } from './admin.profile';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])],
  controllers: [],
  providers: [AdminService, AdminProfile],
  exports: [AdminService],
})
export class AdminModule {}
