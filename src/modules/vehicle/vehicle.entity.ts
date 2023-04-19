import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { Driver } from '../driver/driver.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';
import { Reservation } from '../reservation/reservation.entity';

@Entity()
export class Vehicle extends Base {
  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.vehicles)
  business: Business;

  @OneToMany(() => Driver, (driver) => driver.vehicle)
  drivers: Driver[];

  @OneToMany(() => ServicePersonnel, (sp) => sp.vehicle)
  servicePersonnel: ServicePersonnel[];

  @OneToMany(() => Reservation, (reservation) => reservation.vehicle)
  reservations: Reservation[];
}
