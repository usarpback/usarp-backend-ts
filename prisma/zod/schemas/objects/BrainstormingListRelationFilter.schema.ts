import { z } from 'zod';
import { BrainstormingWhereInputObjectSchema } from './BrainstormingWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingListRelationFilter> = z
  .object({
    every: z.lazy(() => BrainstormingWhereInputObjectSchema).optional(),
    some: z.lazy(() => BrainstormingWhereInputObjectSchema).optional(),
    none: z.lazy(() => BrainstormingWhereInputObjectSchema).optional(),
  })
  .strict();

export const BrainstormingListRelationFilterObjectSchema = Schema;
