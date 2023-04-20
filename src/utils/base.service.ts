import {
  FindManyOptions,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { Base } from './base.entity';

export class BaseService<T extends Base> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async findOne(
    entity: FindOptionsWhere<T>,
    relations?: FindOptionsRelations<T>,
  ): Promise<T> {
    return this.repository.findOne({ where: entity, relations });
  }

  async find(entity: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(entity);
  }

  async update(id: number, entity: QueryDeepPartialEntity<T>): Promise<void> {
    await this.repository.update(id, entity);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
