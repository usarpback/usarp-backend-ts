import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeProjeto: z.lazy(() => SortOrderSchema).optional(),
    descricao: z.lazy(() => SortOrderSchema).optional(),
    criadorId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjetoMinOrderByAggregateInputObjectSchema = Schema;
