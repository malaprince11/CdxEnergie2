import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../user.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/')
  create(@Body() user) {
    return this.usersService.create(user);
  }
  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }
}
