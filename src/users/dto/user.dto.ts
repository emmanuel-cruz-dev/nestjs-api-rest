export class User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  role: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}
