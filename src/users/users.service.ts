import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUsers() {
    return this.prisma.user.findMany();
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        ...user,
        role: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}
