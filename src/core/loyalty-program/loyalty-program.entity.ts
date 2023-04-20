import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Customer } from '../customer/customer.entity';
import { Promotion } from '../promotion/promotion.entity';

@Entity()
export class LoyaltyProgram extends Base {
  @Column()
  name: string;

  @OneToMany(() => Customer, (customer) => customer.loyaltyProgram)
  customers: Customer[];

  @OneToMany(() => Promotion, (promotion) => promotion.loyaltyProgram)
  promotions: Promotion[];
}
