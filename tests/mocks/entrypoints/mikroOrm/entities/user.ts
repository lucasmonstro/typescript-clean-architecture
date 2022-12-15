import { Factory } from '@mikro-orm/seeder';
import { User } from '@/entrypoints/mikroOrm/entities';
import { makeUser } from '@/tests/mocks/core/entities';

export class UserFactory extends Factory<User> {
  model = User;

  definition(): Partial<User> {
    return makeUser();
  }
}
