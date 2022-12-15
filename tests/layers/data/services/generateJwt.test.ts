import 'jest-expect-jwt'; // TODO: must be imported in the jest settings
import { faker } from '@faker-js/faker';
import { makeGenerateJwtService } from '@/data/services';
import { env } from '@/configuration/env';
import { GenerateJwtService } from '@/core/services';

type SutTypes = {
  sut: GenerateJwtService;
};

describe('generateJwtService', () => {
  const makeSut = (): SutTypes => {
    const sut = makeGenerateJwtService();
    return { sut };
  };

  it('should return undefined when user was not found by email', () => {
    const sub = faker.datatype.number();
    const {
      jwt: { expiresIn },
    } = env;
    const { sut } = makeSut();
    const { accessToken } = sut(sub);
    expect(accessToken).toBeTokenMatching({ sub });
    expect(accessToken).toBeTokenExpiringIn(expiresIn);
  });
});
