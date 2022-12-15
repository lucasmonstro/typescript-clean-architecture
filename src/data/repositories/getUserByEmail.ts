import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { User } from '@/core/entities';
import { GetUserByEmailRepository } from '@/core/repositories';
import { User as UserEntity } from '@/entrypoints/mikroOrm/entities';

export const makeGetUserByEmailRepository =
  (mikroOrm: MikroORM<PostgreSqlDriver>): GetUserByEmailRepository =>
  async (email: string): Promise<User | undefined> => {
    const user = await mikroOrm.em.findOne(UserEntity, { email });
    const userWasNotFoundByEmail = !user;
    if (userWasNotFoundByEmail) {
      return undefined;
    }
    return user;
  };
