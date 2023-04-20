import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { LoginDto, LoginResponseDto, RegisterDto } from './auth.dto';
import { User } from 'src/core/user/user.entity';
import { LoginResponse } from './auth.model';

@Injectable()
export class AuthProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, RegisterDto, User);
      createMap(mapper, LoginDto, User);
      createMap(mapper, LoginResponse, LoginResponseDto);
    };
  }
}
