import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Promotion } from 'src/promotion/promotion.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { Driver } from '../driver/driver.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { Redemption } from 'src/redemption/redemption.entity';

@Entity()
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contactInformation: string;

  @OneToMany(() => Driver, (driver) => driver.business)
  drivers: Driver[];

  @OneToMany(() => ServicePersonnel, (sp) => sp.business)
  servicePersonnel: ServicePersonnel[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.business)
  vehicles: Vehicle[];

  @OneToMany(() => Promotion, (promotion) => promotion.business)
  promotions: Promotion[];

  @OneToMany(() => Reservation, (reservation) => reservation.business)
  reservations: Reservation[];

  @OneToMany(() => Redemption, (redemption) => redemption.business)
  redemptions: Redemption[];
}
