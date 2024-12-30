import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll() {
    return 'Hello World! from user service';
  }
}
