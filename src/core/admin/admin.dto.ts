import { AutoMap } from '@automapper/classes';

export class AdminDto {
  @AutoMap()
  uuid: string;

  @AutoMap()
  name: string;
}

export class CreateAdminDto {
  @AutoMap()
  name: string;
}
