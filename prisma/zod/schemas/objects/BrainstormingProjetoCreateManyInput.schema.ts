import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateManyInput> = z
  .object({
    projetoId: z.string(),
    brainstormingId: z.string(),
  })
  .strict();

export const BrainstormingProjetoCreateManyInputObjectSchema = Schema;
