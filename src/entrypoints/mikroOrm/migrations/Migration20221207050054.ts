import { Migration } from '@mikro-orm/migrations';

export class Migration20221207050054 extends Migration {
  // eslint-disable-next-line @typescript-eslint/require-await
  async up(): Promise<void> {
    this.addSql(
      'create table "user" ("id" serial primary key, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null, "role" text check ("role" in (\'admin\', \'seller\')) not null, "created_at" timestamp not null);'
    );
    this.addSql('create index "user_email_index" on "user" ("email");');
  }
}
