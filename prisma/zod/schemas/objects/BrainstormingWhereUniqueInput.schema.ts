import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
  })
  .strict();

export const BrainstormingWhereUniqueInputObjectSchema = Schema;
