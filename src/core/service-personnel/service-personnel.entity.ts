import { Column, Entity, ManyToOne, OneToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import { User } from '../user/user.entity';

@Entity()
export class ServicePersonnel extends Base {
  @Column()
  name: string;

  @ManyToOne(() => Business, (business) => business.servicePersonnels)
  business: Business;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.servicePersonnel)
  vehicle: Vehicle;

  @OneToOne(() => User, (user) => user.driver)
  user: User;
}
