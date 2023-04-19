import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Promotion } from '../promotion/promotion.entity';

@Entity()
export class ServiceType extends Base {
  @Column()
  name: string;

  @OneToMany(() => Promotion, (promotion) => promotion.serviceType)
  promotions: Promotion[];
}
