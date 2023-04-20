import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { Base } from 'src/utils/base.entity';
import { Role } from './user.enum';
import { Customer } from '../customer/customer.entity';
import { Driver } from '../driver/driver.entity';
import { ServicePersonnel } from '../service-personnel/service-personnel.entity';
import { Admin } from '../admin/admin.entity';

@Entity()
export class User extends Base {
  @AutoMap()
  @Column({ unique: true })
  username: string;

  @AutoMap()
  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @AutoMap()
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

  @AutoMap(() => Admin)
  @OneToOne(() => Admin, (admin) => admin.user)
  @JoinColumn()
  admin: Admin;
}
