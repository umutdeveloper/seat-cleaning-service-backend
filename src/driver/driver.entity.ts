import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../business/business.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.drivers)
  business: Business;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.drivers)
  vehicle: Vehicle;
}
