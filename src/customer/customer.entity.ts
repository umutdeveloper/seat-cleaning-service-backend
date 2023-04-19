import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Reservation } from 'src/reservation/reservation.entity';
import { LoyaltyProgram } from 'src/loyalty-program/loyalty-program.entity';
import { Redemption } from 'src/redemption/redemption.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contactInformation: string;

  @OneToMany(() => Reservation, (reservation) => reservation.customer)
  reservations: Reservation[];

  @ManyToOne(() => LoyaltyProgram, (loyaltyProgram) => loyaltyProgram.customers)
  loyaltyProgram: LoyaltyProgram;

  @OneToMany(() => Redemption, (redemption) => redemption.customer)
  redemptions: Redemption[];
}
