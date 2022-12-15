export type ComparePasswordsService = (
  password: string,
  encryptedPassword: string
) => boolean;
