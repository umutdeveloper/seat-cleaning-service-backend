import { Business } from 'src/business/business.entity';
import { Customer } from 'src/customer/customer.entity';
import { Vehicle } from 'src/vehicle/vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

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
