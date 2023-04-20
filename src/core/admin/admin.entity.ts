import { Column, Entity, OneToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { User } from '../user/user.entity';
import { AutoMap } from '@automapper/classes';

@Entity()
export class Admin extends Base {
  @AutoMap()
  @Column()
  name: string;

  @OneToOne(() => User, (user) => user.admin)
  user: User;
}
