import { z } from 'zod';
import { BrainstormingProjetoWhereInputObjectSchema } from './BrainstormingProjetoWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoListRelationFilter> = z
  .object({
    every: z.lazy(() => BrainstormingProjetoWhereInputObjectSchema).optional(),
    some: z.lazy(() => BrainstormingProjetoWhereInputObjectSchema).optional(),
    none: z.lazy(() => BrainstormingProjetoWhereInputObjectSchema).optional(),
  })
  .strict();

export const BrainstormingProjetoListRelationFilterObjectSchema = Schema;
