import { z } from 'zod';

export const ProjetoUsuarioScalarFieldEnumSchema = z.enum([
  'id',
  'projetoId',
  'membroId',
  'nomeMembro',
  'emailMembro',
  'papelNoProjeto',
]);
