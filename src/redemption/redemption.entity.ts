import { Business } from 'src/business/business.entity';
import { Customer } from 'src/customer/customer.entity';
import { Promotion } from 'src/promotion/promotion.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Redemption {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Promotion, (promotion) => promotion.redemptions)
  promotion: Promotion;

  @ManyToOne(() => Customer, (customer) => customer.redemptions)
  customer: Customer;

  @ManyToOne(() => Business, (business) => business.redemptions)
  business: Business;

  @Column()
  redeemedAt: Date;
}
