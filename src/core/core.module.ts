import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { BusinessModule } from './business/business.module';
import { CustomerModule } from './customer/customer.module';
import { DriverModule } from './driver/driver.module';
import { LoyaltyProgramModule } from './loyalty-program/loyalty-program.module';
import { PromotionModule } from './promotion/promotion.module';
import { RedemptionModule } from './redemption/redemption.module';
import { ReservationModule } from './reservation/reservation.module';
import { ServicePersonnelModule } from './service-personnel/service-personnel.module';
import { ServiceTypeModule } from './service-type/service-type.module';
import { UserModule } from './user/user.module';
import { VehicleModule } from './vehicle/vehicle.module';

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
  ],
  controllers: [],
  providers: [],
})
export class CoreModule {}
