import { Entity, Column, OneToMany } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Promotion } from '../promotion/promotion.entity';
import { Reservation } from '../reservation/reservation.entity';
import { Redemption } from '../redemption/redemption.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { Driver } from '../driver/driver.entity';

@Entity()
export class Business extends Base {
  @Column()
  name: string;

  @Column()
  contactInformation: string;

  @OneToMany(() => Driver, (driver) => driver.business)
  drivers: Driver[];

  @OneToMany(() => ServicePersonnel, (sp) => sp.business)
  servicePersonnels: ServicePersonnel[];

  @OneToMany(() => Vehicle, (vehicle) => vehicle.business)
  vehicles: Vehicle[];

  @OneToMany(() => Promotion, (promotion) => promotion.business)
  promotions: Promotion[];

  @OneToMany(() => Reservation, (reservation) => reservation.business)
  reservations: Reservation[];

  @OneToMany(() => Redemption, (redemption) => redemption.business)
  redemptions: Redemption[];
}
