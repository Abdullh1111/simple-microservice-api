import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('findAll')
  findAll() {
    return this.appService.findAll();
  }
  @MessagePattern('createUser')
  async createUser(@Payload() data: CreateUserDto) {
    return this.appService.createUser(data);
  }

  @MessagePattern('findAllUsers')
  async findAllUsers() {
    return this.appService.findAllUsers();
  }
}
