import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('USER') private user: ClientGrpcProxy) {}
  async findAll() {
    return this.user.send('findAll', {});
  }
}
