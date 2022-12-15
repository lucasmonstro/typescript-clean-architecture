import { env } from '@/configuration/env';
import { MikroOrmDriverOptions } from './types';

// TODO: improve these variables
const mikroOrmProductionPath = `${env.app.currentWorkingDirectory}/dist/entrypoints/mikroOrm`;
const mikroOrmDevelopmentPath = `${env.app.currentWorkingDirectory}/src/entrypoints/mikroOrm`;

const config: MikroOrmDriverOptions = {
  dbName: env.postgres.db,
  user: env.postgres.user,
  password: env.postgres.password,
  type: 'postgresql',
  allowGlobalContext: true,
  forceUtcTimezone: true,
  debug: true,
  entities: [`${mikroOrmProductionPath}/entities`],
  entitiesTs: [`${mikroOrmDevelopmentPath}/entities`],
  migrations: {
    tableName: 'migrations',
    path: `${mikroOrmProductionPath}/migrations`,
    pathTs: `${mikroOrmDevelopmentPath}/migrations`,
  },
};

export default config;
