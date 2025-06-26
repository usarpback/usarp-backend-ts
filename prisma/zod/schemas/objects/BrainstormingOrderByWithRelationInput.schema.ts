import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';
import { BrainstormingProjetoOrderByRelationAggregateInputObjectSchema } from './BrainstormingProjetoOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    criadorId: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    projetoRelacionado: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    horario: z.lazy(() => SortOrderSchema).optional(),
    historiasUsuario: z.lazy(() => SortOrderSchema).optional(),
    criador: z
      .lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
      .optional(),
    projetos: z
      .lazy(() => BrainstormingProjetoOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrainstormingOrderByWithRelationInputObjectSchema = Schema;
