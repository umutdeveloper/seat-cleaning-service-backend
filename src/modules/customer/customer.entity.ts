import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Reservation } from '../reservation/reservation.entity';
import { LoyaltyProgram } from '../loyalty-program/loyalty-program.entity';
import { Redemption } from '../redemption/redemption.entity';

@Entity()
export class Customer extends Base {
  @Column()
  contactInformation: string;

  @OneToMany(() => Reservation, (reservation) => reservation.customer)
  reservations: Reservation[];

  @ManyToOne(() => LoyaltyProgram, (loyaltyProgram) => loyaltyProgram.customers)
  loyaltyProgram: LoyaltyProgram;

  @OneToMany(() => Redemption, (redemption) => redemption.customer)
  redemptions: Redemption[];
}
