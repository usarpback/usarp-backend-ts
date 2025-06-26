import { z } from 'zod';

export const ProjetoScalarFieldEnumSchema = z.enum([
  'id',
  'nomeProjeto',
  'descricao',
  'criadorId',
  'status',
]);
