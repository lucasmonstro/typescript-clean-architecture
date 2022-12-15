import { sign } from 'jsonwebtoken';
import { env } from '@/configuration/env';
import { Jwt } from '@/core/entities';
import { GenerateJwtService } from '@/core/services';

export const makeGenerateJwtService =
  (): GenerateJwtService =>
  (sub: number): Jwt => {
    const {
      jwt: { secret, expiresIn },
    } = env;
    const accessToken = sign({ sub }, secret, { expiresIn });
    const jwt: Jwt = { accessToken };
    return jwt;
  };
