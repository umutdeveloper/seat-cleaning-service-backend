import { Entity, OneToMany, ManyToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { LoyaltyProgram } from '../loyalty-program/loyalty-program.entity';
import { Redemption } from '../redemption/redemption.entity';
import { ServiceType } from '../service-type/service-type.entity';

@Entity()
export class Promotion extends Base {
  @ManyToOne(() => Business, (business) => business.promotions)
  business: Business;

  @ManyToOne(
    () => LoyaltyProgram,
    (loyaltyProgram) => loyaltyProgram.promotions,
  )
  loyaltyProgram: LoyaltyProgram;

  @ManyToOne(() => ServiceType, (serviceType) => serviceType.promotions)
  serviceType: ServiceType;

  @OneToMany(() => Redemption, (redemption) => redemption.promotion)
  redemptions: Redemption[];
}
