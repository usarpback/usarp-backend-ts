import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    criadorId: z.lazy(() => SortOrderSchema).optional(),
    titulo: z.lazy(() => SortOrderSchema).optional(),
    projetoRelacionado: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    horario: z.lazy(() => SortOrderSchema).optional(),
    historiasUsuario: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const BrainstormingCountOrderByAggregateInputObjectSchema = Schema;
