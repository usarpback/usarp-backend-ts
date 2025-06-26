import { z } from 'zod';
import { BrainstormingWhereInputObjectSchema } from './BrainstormingWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingRelationFilter> = z
  .object({
    is: z
      .lazy(() => BrainstormingWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BrainstormingWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BrainstormingRelationFilterObjectSchema = Schema;
