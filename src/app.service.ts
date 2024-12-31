import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateUserDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(@Inject('USER') private user: ClientGrpcProxy) {}
  async findAll() {
    return this.user.send('findAll', {});
  }

  async findAllUsers() {
    return this.user.send('findAllUsers', {});
  }

  async createUser(data: CreateUserDto) {
    return this.user.send('createUser', data);
  }
}
