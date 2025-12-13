import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  birthDate: Date;
  role: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      email: 'admin@example.com',
      password: 'password1',
      firstName: 'Admin',
      lastName: 'Person',
      emailVerified: true,
      birthDate: new Date('1990-01-01'),
      role: 'admin',
      phone: '123-456-7890',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-01-01'),
    },
    {
      id: 2,
      email: 'user@example.com',
      password: 'password1',
      firstName: 'User',
      lastName: 'User',
      emailVerified: true,
      birthDate: new Date('1990-01-01'),
      role: 'user',
      phone: '123-456-7890',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-01-01'),
    },
    {
      id: 3,
      email: 'user2@example.com',
      password: 'password1',
      firstName: 'User',
      lastName: 'User',
      emailVerified: true,
      birthDate: new Date('1990-01-01'),
      role: 'user',
      phone: '123-456-7890',
      createdAt: new Date('2022-01-01'),
      updatedAt: new Date('2022-01-01'),
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
