import { AppEnv } from './types';

export const env: AppEnv = {
  app: {
    currentWorkingDirectory: process.cwd(),
    isDevelopment: (process.env.NODE_ENV as string) === 'development',
    isProduction: (process.env.NODE_ENV as string) === 'production',
    port: +(process.env.APP_PORT as string),
  },
  jwt: {
    secret: process.env.JWT_SECRET as string,
    expiresIn: process.env.JWT_EXPIRES_IN as string,
  },
  postgres: {
    host: process.env.POSTGRES_HOST as string,
    port: process.env.POSTGRES_PORT as string,
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    db: process.env.POSTGRES_DB as string,
  },
};
