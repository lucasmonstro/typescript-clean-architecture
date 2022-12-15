export type AppEnv = {
  app: {
    currentWorkingDirectory: string;
    isDevelopment: boolean;
    isProduction: boolean;
    port: number;
  };
  jwt: {
    secret: string;
    expiresIn: string;
  };
  postgres: {
    host: string;
    port: string;
    user: string;
    password: string;
    db: string;
  };
};
