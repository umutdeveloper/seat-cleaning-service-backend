import { Entity, Column, ManyToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { Customer } from '../customer/customer.entity';
import { Promotion } from '../promotion/promotion.entity';

@Entity()
export class Redemption extends Base {
  @ManyToOne(() => Promotion, (promotion) => promotion.redemptions)
  promotion: Promotion;

  @ManyToOne(() => Customer, (customer) => customer.redemptions)
  customer: Customer;

  @ManyToOne(() => Business, (business) => business.redemptions)
  business: Business;

  @Column()
  redeemedAt: Date;
}
