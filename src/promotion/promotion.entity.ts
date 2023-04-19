import { Business } from 'src/business/business.entity';
import { LoyaltyProgram } from 'src/loyalty-program/loyalty-program.entity';
import { Redemption } from 'src/redemption/redemption.entity';
import { ServiceType } from 'src/service-type/service-type.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id: number;

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
