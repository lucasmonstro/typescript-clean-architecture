export enum UserRole {
  admin = 'admin',
  seller = 'seller',
}

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
};
