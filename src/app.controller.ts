import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateUserDto } from './app.dto';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.findAll();
  }

  @Get('/alluser')
  async findAllUsers() {
    return this.appService.findAllUsers();
  }
  @Post('/create')
  async createUser(@Body() data: CreateUserDto) {
    return this.appService.createUser(data);
  }
}
