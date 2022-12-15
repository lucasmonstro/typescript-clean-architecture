import { Jwt } from '@/core/entities';

export type GenerateJwtService = (userId: number) => Jwt;
