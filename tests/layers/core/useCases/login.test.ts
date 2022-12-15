import { EmailNotFoundError, WrongPasswordError } from '@/core/errors';
import { GetUserByEmailRepository } from '@/core/repositories';
import { ComparePasswordsService, GenerateJwtService } from '@/core/services';
import { makeLoginUseCase, UseCase } from '@/core/useCases/login';
import { makeJwt, makeUser } from '@/tests/mocks/core/entities';
import { makeLoginInput } from '@/tests/mocks/entrypoints/express/input';

type SutTypes = {
  comparePasswordsService: jest.MockedFunction<ComparePasswordsService>;
  generateJwtService: jest.MockedFunction<GenerateJwtService>;
  getUserByEmailRepository: jest.MockedFunction<GetUserByEmailRepository>;
  sut: UseCase;
};

describe('loginUseCase', () => {
  const makeSut = (): SutTypes => {
    const deps = {
      comparePasswordsService: jest.fn(),
      generateJwtService: jest.fn(),
      getUserByEmailRepository: jest.fn(),
    };
    const sut = makeLoginUseCase(deps);
    return { ...deps, sut };
  };

  it('should throw EmailNotFoundError when email not found', async () => {
    const { getUserByEmailRepository, sut } = makeSut();
    getUserByEmailRepository.mockResolvedValueOnce(undefined);
    const input = makeLoginInput();
    await expect(sut(input)).rejects.toThrow(EmailNotFoundError);
    expect(getUserByEmailRepository).toHaveBeenCalledWith(input.email);
  });

  it('should throw WrongPasswordError when password is wrong', async () => {
    const { comparePasswordsService, getUserByEmailRepository, sut } =
      makeSut();
    const user = makeUser({ password: 'wrongPassword' });
    getUserByEmailRepository.mockResolvedValueOnce(user);
    comparePasswordsService.mockReturnValueOnce(false);
    const input = makeLoginInput();
    await expect(sut(input)).rejects.toThrow(WrongPasswordError);
    expect(comparePasswordsService).toHaveBeenCalledWith(
      input.password,
      user.password
    );
  });

  it('should return a Jwt when credentials are correct', async () => {
    const {
      comparePasswordsService,
      generateJwtService,
      getUserByEmailRepository,
      sut,
    } = makeSut();
    const user = makeUser();
    getUserByEmailRepository.mockResolvedValueOnce(user);
    comparePasswordsService.mockReturnValueOnce(true);
    const jwt = makeJwt();
    generateJwtService.mockImplementationOnce(() => jwt);
    const input = makeLoginInput();
    expect(await sut(input)).toStrictEqual(jwt);
    expect(generateJwtService).toHaveBeenCalledWith(user.id);
  });
});
