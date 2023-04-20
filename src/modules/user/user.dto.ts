import { CreateAdminDto } from '../admin/admin.dto';
import { Role } from './user.enum';

export class CreateUserDto {
  username: string;
  password: string;
  role: Role;
  admin?: CreateAdminDto;
}

export class FindUserDto {
  username: string;
  password: string;
  role?: Role;
}
