import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BrainstormingProjetoCountOrderByAggregateInputObjectSchema } from './BrainstormingProjetoCountOrderByAggregateInput.schema';
import { BrainstormingProjetoMaxOrderByAggregateInputObjectSchema } from './BrainstormingProjetoMaxOrderByAggregateInput.schema';
import { BrainstormingProjetoMinOrderByAggregateInputObjectSchema } from './BrainstormingProjetoMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoOrderByWithAggregationInput> =
  z
    .object({
      projetoId: z.lazy(() => SortOrderSchema).optional(),
      brainstormingId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => BrainstormingProjetoCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => BrainstormingProjetoMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => BrainstormingProjetoMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const BrainstormingProjetoOrderByWithAggregationInputObjectSchema =
  Schema;
