# 📝 Description

> Auth REST api

# 🧰 Installation

## Prerequisites

- [`Node`](https://nodejs.org/en/download) v18.x
- [`yarn`](https://yarnpkg.com/cli/install)
- [`Docker`](https://docs.docker.com/get-docker)

Install yarn packages before continue

```bash
yarn
```

Ask other developers to share `.env`. For security reasons this file is not versioned.

Whenever a new environment variable is added, it must be also added to the `.example.env` file to keep everything up to date.

## Setting up Docker

- This is will make a new PostgreSQL running in the standard port `5432`
- Please shutdown any previous conflicting PostgreSQL instances before starting
  this

```bash
docker-compose up -d
```

Check the database is up

```bash
docker logs -f backend_pg
```

Check that you can log into a database with `psql`

```bash
docker exec -it backend_pg psql -U backend_pg_user backend_pg_db
```

View tables

```psql
\dt
```

## Creating the initial database

Run initial migrations to set up initial database tables

```bash
yarn db:sync
```

# ⌨ Development

## ⚙ Running the app

```bash
# development mode
yarn dev

# production mode
yarn start
```

## 🧪 Running tests per layer

Creating tests database Only integration tests are supported. Backend is spun up
on a special database

Tests use their own database. To create it:

```bash
docker exec -it backend_pg psql -U backend_pg_user -c "create database backend_pg_db_test" backend_pg_db
```

```bash
# core layer
yarn test:core

# core layer with code coverage
yarn test:core:coverage

# data layer
yarn test:data
```

After executing `yarn test:core:coverage`, the `coverage/` folder will be generated with
coverage details

# 📏 Lint

Linting codebase

```bash
# getting lint issues
yarn lint

# fixing lint issues
yarn lint:fix
```

# 🧳 Migrations

Run `typeorm` CLI

## Automatically generating migrations

You can generate migration files

1. Update entity source code
2. You have an up-to-date local development database

```bash
# creates a file under src/entrypoints/mikroOrm/migrations/
yarn typeorm migration:generate -n MigrationName
```

## Apply migrations against the local database

```bash
yarn db:sync
```

Check the result of migrations using `psql` command-line tool

```bash
docker exec -it backend_pg psql -U backend_pg_user backend_pg_db
```

```psql
\d 'todo'
```

# 📦 Building

Before building application to production, make sure environment variables are
applied correctly

Building for production

```bash
yarn build
```

Running on production

```bash
yarn start
```

# ✅ TODO

- add e2e tests
- add mikroORM config for tests and disable logging in tests
- add JOI to validate data
- add swagger
- add application logs
- add way to detect if envs are loaded correctly

Observation: Some TODOS are spread across the code and need to be fixed ASAP
