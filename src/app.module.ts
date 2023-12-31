import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UsersService } from './user/user.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
