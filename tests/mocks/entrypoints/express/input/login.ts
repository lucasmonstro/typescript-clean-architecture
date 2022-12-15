import { faker } from '@faker-js/faker';
import { Input } from '@/core/useCases/login';

export const makeLoginInput = (input?: Partial<Input>): Input => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  ...input,
});
