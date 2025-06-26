import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCountOrderByAggregateInput> =
  z
    .object({
      projetoId: z.lazy(() => SortOrderSchema).optional(),
      brainstormingId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const BrainstormingProjetoCountOrderByAggregateInputObjectSchema =
  Schema;
