import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateManyProjetoInput> = z
  .object({
    brainstormingId: z.string(),
  })
  .strict();

export const BrainstormingProjetoCreateManyProjetoInputObjectSchema = Schema;
