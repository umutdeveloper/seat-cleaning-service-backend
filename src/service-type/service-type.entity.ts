import { Promotion } from 'src/promotion/promotion.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class ServiceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Promotion, (promotion) => promotion.serviceType)
  promotions: Promotion[];
}
