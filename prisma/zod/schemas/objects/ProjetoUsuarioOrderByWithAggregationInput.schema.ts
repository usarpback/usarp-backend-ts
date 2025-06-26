import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjetoUsuarioCountOrderByAggregateInputObjectSchema } from './ProjetoUsuarioCountOrderByAggregateInput.schema';
import { ProjetoUsuarioMaxOrderByAggregateInputObjectSchema } from './ProjetoUsuarioMaxOrderByAggregateInput.schema';
import { ProjetoUsuarioMinOrderByAggregateInputObjectSchema } from './ProjetoUsuarioMinOrderByAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    projetoId: z.lazy(() => SortOrderSchema).optional(),
    membroId: z.lazy(() => SortOrderSchema).optional(),
    nomeMembro: z.lazy(() => SortOrderSchema).optional(),
    emailMembro: z.lazy(() => SortOrderSchema).optional(),
    papelNoProjeto: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProjetoUsuarioCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProjetoUsuarioMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProjetoUsuarioMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjetoUsuarioOrderByWithAggregationInputObjectSchema = Schema;
