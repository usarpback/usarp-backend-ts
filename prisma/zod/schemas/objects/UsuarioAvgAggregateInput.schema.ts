import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioAvgAggregateInputType> = z
  .object({
    tentativasLogin: z.literal(true).optional(),
    tentativasExclusao: z.literal(true).optional(),
  })
  .strict();

export const UsuarioAvgAggregateInputObjectSchema = Schema;
