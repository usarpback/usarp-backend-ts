import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    projetoId: z.lazy(() => SortOrderSchema).optional(),
    membroId: z.lazy(() => SortOrderSchema).optional(),
    nomeMembro: z.lazy(() => SortOrderSchema).optional(),
    emailMembro: z.lazy(() => SortOrderSchema).optional(),
    papelNoProjeto: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProjetoUsuarioMaxOrderByAggregateInputObjectSchema = Schema;
