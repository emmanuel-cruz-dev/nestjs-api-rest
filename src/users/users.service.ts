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
      data: user,
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}
