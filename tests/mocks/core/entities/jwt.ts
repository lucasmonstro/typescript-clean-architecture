import { faker } from '@faker-js/faker';
import { Jwt } from '@/core/entities';

export const makeJwt = (data?: Partial<Jwt>): Jwt => ({
  accessToken: faker.internet.password(),
  ...data,
});
