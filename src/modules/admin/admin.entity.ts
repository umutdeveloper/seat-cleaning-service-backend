import { Column, Entity } from 'typeorm';
import { Base } from 'src/utils/base.entity';

@Entity()
export class Admin extends Base {
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ default: true })
  isActive: boolean;
}
