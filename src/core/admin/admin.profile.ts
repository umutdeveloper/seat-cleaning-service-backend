import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Admin } from './admin.entity';
import { AdminDto, CreateAdminDto } from './admin.dto';

@Injectable()
export class AdminProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Admin, AdminDto);
      createMap(mapper, CreateAdminDto, Admin);
    };
  }
}
