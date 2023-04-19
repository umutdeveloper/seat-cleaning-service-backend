import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Business } from '../business/business.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class ServicePersonnel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.servicePersonnel)
  business: Business;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.servicePersonnel)
  vehicle: Vehicle;
}
