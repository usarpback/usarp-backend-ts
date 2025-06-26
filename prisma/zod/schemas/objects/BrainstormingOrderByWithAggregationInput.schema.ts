import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BrainstormingCountOrderByAggregateInputObjectSchema } from './BrainstormingCountOrderByAggregateInput.schema';
import { BrainstormingMaxOrderByAggregateInputObjectSchema } from './BrainstormingMaxOrderByAggregateInput.schema';
import { BrainstormingMinOrderByAggregateInputObjectSchema } from './BrainstormingMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    criadorId: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    projetoRelacionado: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    horario: z.lazy(() => SortOrderSchema).optional(),
    historiasUsuario: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => BrainstormingCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => BrainstormingMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => BrainstormingMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrainstormingOrderByWithAggregationInputObjectSchema = Schema;
