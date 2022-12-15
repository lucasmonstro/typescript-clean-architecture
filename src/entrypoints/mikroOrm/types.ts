import { MikroORM, Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export type MikroOrmDriver = MikroORM<PostgreSqlDriver>;
export type MikroOrmDriverOptions = Options<PostgreSqlDriver>;
