import { Module } from '@nestjs/common';
import { UsersController } from './controller/user.controller';
import { UsersService } from './user.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}
