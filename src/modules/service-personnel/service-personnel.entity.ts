import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class ServicePersonnel extends Base {
  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.servicePersonnels)
  business: Business;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.servicePersonnel)
  vehicle: Vehicle;
}
