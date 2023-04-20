import { AutoMap } from '@automapper/classes';
import { User } from 'src/core/user/user.entity';

export class LoginResponse {
  @AutoMap()
  accessToken: string;
  @AutoMap()
  user: User;
}
