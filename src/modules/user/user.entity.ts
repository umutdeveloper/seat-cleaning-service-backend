import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { Role } from './user.enum';
import { Customer } from '../customer/customer.entity';
import { Driver } from '../driver/driver.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';
import { Admin } from '../admin/admin.entity';

@Entity()
export class User extends Base {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'enum', enum: Role, default: Role.Customer })
  role: Role;

  @OneToOne(() => Customer, (customer) => customer.user)
  @JoinColumn()
  customer: Customer;

  @OneToOne(() => Driver, (driver) => driver.user)
  @JoinColumn()
  driver: Driver;

  @OneToOne(() => ServicePersonnel, (sp) => sp.user)
  @JoinColumn()
  servicePersonnel: ServicePersonnel;

  @OneToOne(() => Admin, (admin) => admin.user)
  @JoinColumn()
  admin: Admin;
}
