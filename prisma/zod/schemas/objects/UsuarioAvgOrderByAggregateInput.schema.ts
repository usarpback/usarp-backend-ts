import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioAvgOrderByAggregateInput> = z
  .object({
    tentativasLogin: z.lazy(() => SortOrderSchema).optional(),
    tentativasExclusao: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UsuarioAvgOrderByAggregateInputObjectSchema = Schema;
