import { compareSync } from 'bcryptjs';
import { ComparePasswordsService } from '@/core/services';

export const makeComparePasswordsService =
  (): ComparePasswordsService =>
  (password: string, encryptedPassword: string): boolean => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const passwordsAreEqual: boolean = compareSync(password, encryptedPassword);
    return passwordsAreEqual;
  };
