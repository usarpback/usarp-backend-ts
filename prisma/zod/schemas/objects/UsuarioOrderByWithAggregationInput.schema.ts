import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioCountOrderByAggregateInputObjectSchema } from './UsuarioCountOrderByAggregateInput.schema';
import { UsuarioAvgOrderByAggregateInputObjectSchema } from './UsuarioAvgOrderByAggregateInput.schema';
import { UsuarioMaxOrderByAggregateInputObjectSchema } from './UsuarioMaxOrderByAggregateInput.schema';
import { UsuarioMinOrderByAggregateInputObjectSchema } from './UsuarioMinOrderByAggregateInput.schema';
import { UsuarioSumOrderByAggregateInputObjectSchema } from './UsuarioSumOrderByAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeCompleto: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    senha: z.lazy(() => SortOrderSchema).optional(),
    genero: z.lazy(() => SortOrderSchema).optional(),
    dataNascimento: z.lazy(() => SortOrderSchema).optional(),
    perfil: z.lazy(() => SortOrderSchema).optional(),
    organizacao: z.lazy(() => SortOrderSchema).optional(),
    tentativasLogin: z.lazy(() => SortOrderSchema).optional(),
    tentativasExclusao: z.lazy(() => SortOrderSchema).optional(),
    bloqueadoAte: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tokenRedefinirSenha: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    expiraRedefinirSenha: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => UsuarioCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => UsuarioAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UsuarioMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UsuarioMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UsuarioSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UsuarioOrderByWithAggregationInputObjectSchema = Schema;
