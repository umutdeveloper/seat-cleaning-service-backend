import { AutoMap } from '@automapper/classes';
import { AdminDto } from '../admin/admin.dto';

export class UserDto {
  @AutoMap()
  uuid: string;
  @AutoMap()
  username: string;
  @AutoMap(() => AdminDto)
  admin: AdminDto;
}
