import { AutoMap } from '@automapper/classes';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Base {
  @PrimaryGeneratedColumn()
  id: number;

  @AutoMap()
  @Index()
  @Column()
  uuid: string = uuidv4();
}
