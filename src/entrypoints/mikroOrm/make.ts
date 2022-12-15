import { MikroORM } from '@mikro-orm/core';
import config from './config';
import { MikroOrmDriver } from './types';

export const makeMikroORM = async (): Promise<MikroOrmDriver> => {
  const orm = await MikroORM.init(config);
  return orm;
};
