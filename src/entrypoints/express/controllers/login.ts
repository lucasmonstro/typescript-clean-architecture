import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Jwt } from '@/core/entities';
import { EmailNotFoundError, WrongPasswordError } from '@/core/errors';
import { Input, UseCase } from '@/core/useCases/login';
import { JSON_WITH_ERROR } from '../types';

export const makeLoginController =
  (
    loginUseCase: UseCase
  ): RequestHandler<unknown, Jwt | JSON_WITH_ERROR, Input> =>
  async (request, response): Promise<void> => {
    try {
      const input: Input = {
        email: request.body.email,
        password: request.body.password,
      };
      const jwt = await loginUseCase(input);
      response.status(StatusCodes.CREATED).send(jwt);
    } catch (error) {
      if (error instanceof EmailNotFoundError) {
        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ code: error.name, message: error.message });
        return;
      }
      if (error instanceof WrongPasswordError) {
        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ code: error.name, message: error.message });
        return;
      }
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          code: 'InternalServerError',
          message: 'Internal server error',
        });
    }
  };
