import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';
import { ProjetoUsuarioOrderByRelationAggregateInputObjectSchema } from './ProjetoUsuarioOrderByRelationAggregateInput.schema';
import { BrainstormingProjetoOrderByRelationAggregateInputObjectSchema } from './BrainstormingProjetoOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoOrderByWithRelationInput> = z
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
    criador: z
      .lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
      .optional(),
    membros: z
      .lazy(() => ProjetoUsuarioOrderByRelationAggregateInputObjectSchema)
      .optional(),
    brainstormings: z
      .lazy(() => BrainstormingProjetoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjetoOrderByWithRelationInputObjectSchema = Schema;
