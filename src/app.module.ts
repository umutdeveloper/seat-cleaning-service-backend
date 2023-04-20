import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { ServiceTypeModule } from './modules/service-type/service-type.module';
import { ServicePersonnelModule } from './modules/service-personnel/service-personnel.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { RedemptionModule } from './modules/redemption/redemption.module';
import { PromotionModule } from './modules/promotion/promotion.module';
import { LoyaltyProgramModule } from './modules/loyalty-program/loyalty-program.module';
import { DriverModule } from './modules/driver/driver.module';
import { CustomerModule } from './modules/customer/customer.module';
import { BusinessModule } from './modules/business/business.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AdminModule,
    UserModule,
    VehicleModule,
    ServiceTypeModule,
    ServicePersonnelModule,
    ReservationModule,
    RedemptionModule,
    PromotionModule,
    LoyaltyProgramModule,
    DriverModule,
    CustomerModule,
    BusinessModule,
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
