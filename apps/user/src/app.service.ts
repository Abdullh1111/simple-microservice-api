import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CreateUserDto } from './app.dto';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  findAll() {
    return 'Hello World! from user service';
  }
  async createUser(data: CreateUserDto) {
    return await this.prisma.user.create({
      data,
    });
  }

  async findAllUsers() {
    return this.prisma.user.findMany();
  }
}
