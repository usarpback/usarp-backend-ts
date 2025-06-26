import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjetoCountOrderByAggregateInputObjectSchema } from './ProjetoCountOrderByAggregateInput.schema';
import { ProjetoMaxOrderByAggregateInputObjectSchema } from './ProjetoMaxOrderByAggregateInput.schema';
import { ProjetoMinOrderByAggregateInputObjectSchema } from './ProjetoMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeProjeto: z.lazy(() => SortOrderSchema).optional(),
    descricao: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    criadorId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjetoCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ProjetoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProjetoMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProjetoOrderByWithAggregationInputObjectSchema = Schema;
