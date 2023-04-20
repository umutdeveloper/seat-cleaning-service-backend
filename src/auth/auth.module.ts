import { UserModule } from 'src/core/user/user.module';
import { AuthController } from './auth.controller';
import { AuthProfile } from './auth.profile';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { AdminModule } from 'src/core/admin/admin.module';

@Module({
  imports: [UserModule, AdminModule],
  controllers: [AuthController],
  providers: [AuthService, AuthProfile],
})
export class AuthModule {}
