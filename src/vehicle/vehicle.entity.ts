import { Reservation } from 'src/reservation/reservation.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Business } from '../business/business.entity';
import { Driver } from '../driver/driver.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

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
