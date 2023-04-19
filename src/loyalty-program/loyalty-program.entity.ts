import { Customer } from 'src/customer/customer.entity';
import { Promotion } from 'src/promotion/promotion.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class LoyaltyProgram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Customer, (customer) => customer.loyaltyProgram)
  customers: Customer[];

  @OneToMany(() => Promotion, (promotion) => promotion.loyaltyProgram)
  promotions: Promotion[];
}
