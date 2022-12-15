import { User } from '@/core/entities';

export type GetUserByEmailRepository = (
  email: string
) => Promise<User | undefined>;
