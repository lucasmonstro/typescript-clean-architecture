import { faker } from '@faker-js/faker';
import { User, UserRole } from '@/core/entities';

export const makeUser = (data?: Partial<User>): User => ({
  id: faker.datatype.number(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  role: faker.helpers.arrayElement(Object.values(UserRole)),
  createdAt: faker.date.future(),
  ...data,
});
