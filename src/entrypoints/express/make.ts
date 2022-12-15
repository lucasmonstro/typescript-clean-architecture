import express from 'express';

export const makeExpress = () => {
  const app = express();
  app.use(express.json());
  return app;
};
