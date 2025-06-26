import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoMaxAggregateInputType> = z
  .object({
    projetoId: z.literal(true).optional(),
    brainstormingId: z.literal(true).optional(),
  })
  .strict();

export const BrainstormingProjetoMaxAggregateInputObjectSchema = Schema;
