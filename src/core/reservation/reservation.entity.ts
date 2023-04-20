import { Column, Entity, ManyToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Business } from '../business/business.entity';
import { Customer } from '../customer/customer.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Reservation extends Base {
  @ManyToOne(() => Customer, (customer) => customer.reservations)
  customer: Customer;

  @ManyToOne(() => Business, (business) => business.reservations)
  business: Business;

  @Column()
  dateAndTime: Date;

  @Column()
  serviceType: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.reservations)
  vehicle: Vehicle;
}
