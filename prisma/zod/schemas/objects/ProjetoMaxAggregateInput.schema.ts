import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nomeProjeto: z.literal(true).optional(),
    descricao: z.literal(true).optional(),
    criadorId: z.literal(true).optional(),
    status: z.literal(true).optional(),
  })
  .strict();

export const ProjetoMaxAggregateInputObjectSchema = Schema;
