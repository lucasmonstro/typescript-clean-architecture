export class EmailNotFoundError extends Error {
  constructor(email: string) {
    super(`Email "${email}" was not found`);
    this.name = 'EmailNotFoundError';
  }
}
