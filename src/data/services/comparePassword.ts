import { compareSync } from 'bcryptjs';
import { ComparePasswordsService } from '@/core/services';

export const makeComparePasswordsService =
  (): ComparePasswordsService =>
  (password: string, encryptedPassword: string): boolean => {
    const passwordsAreEqual: boolean = compareSync(password, encryptedPassword);
    return passwordsAreEqual;
  };
