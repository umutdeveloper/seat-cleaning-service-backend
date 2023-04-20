import { Column, Entity, OneToOne } from 'typeorm';
import { Base } from 'src/utils/base.entity';
import { User } from '../user/user.entity';

@Entity()
export class Admin extends Base {
  @Column()
  name: string;

  @OneToOne(() => User, (user) => user.admin)
  user: User;
}
