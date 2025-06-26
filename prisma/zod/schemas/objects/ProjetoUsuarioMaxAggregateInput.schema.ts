import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    projetoId: z.literal(true).optional(),
    membroId: z.literal(true).optional(),
    nomeMembro: z.literal(true).optional(),
    emailMembro: z.literal(true).optional(),
    papelNoProjeto: z.literal(true).optional(),
  })
  .strict();

export const ProjetoUsuarioMaxAggregateInputObjectSchema = Schema;
