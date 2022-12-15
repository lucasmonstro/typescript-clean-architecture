import './module-alias';
import { env } from './env';
import { makeLoginUseCase } from '@/core/useCases/login';
import { makeGetUserByEmailRepository } from '@/data/repositories';
import {
  makeGenerateJwtService,
  makeComparePasswordsService,
} from '@/data/services';
import { makeExpress } from '@/entrypoints/express';
import { makeLoginController } from '@/entrypoints/express/controllers';
import { makeMikroORM } from '@/entrypoints/mikroOrm';

makeMikroORM()
  .then((mikroOrm) => {
    const app = makeExpress();
    const loginUseCase = makeLoginUseCase({
      comparePasswordsService: makeComparePasswordsService(),
      generateJwtService: makeGenerateJwtService(),
      getUserByEmailRepository: makeGetUserByEmailRepository(mikroOrm),
    });
    const loginController = makeLoginController(loginUseCase);
    app.use('/login', loginController);
    app.listen(env.app.port, () => {
      console.log(`Server is running on port ${env.app.port}`);
    });
  })
  .catch(console.error);
