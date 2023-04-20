import { AutoMap } from '@automapper/classes';
import { CreateAdminDto } from 'src/core/admin/admin.dto';
import { UserDto } from 'src/core/user/user.dto';
import { Role } from 'src/core/user/user.enum';

export class RegisterDto {
  @AutoMap()
  username: string;
  @AutoMap()
  password: string;
  @AutoMap()
  role: Role;
  @AutoMap(() => CreateAdminDto)
  admin: CreateAdminDto;
}

export class LoginDto {
  @AutoMap()
  username: string;
  @AutoMap()
  password: string;
  @AutoMap()
  role: Role;
}

export class LoginResponseDto {
  @AutoMap()
  accessToken: string;
  @AutoMap()
  user: UserDto;
}
