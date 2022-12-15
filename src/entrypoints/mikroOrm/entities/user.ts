import { Entity, Enum, Index, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRole } from '@/core/entities';

@Entity()
export class User {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Index()
  @Property()
  email!: string;

  @Property()
  password!: string;

  @Enum(() => UserRole)
  role!: UserRole;

  @Property({ columnType: 'timestamp' })
  createdAt: Date = new Date();
}
