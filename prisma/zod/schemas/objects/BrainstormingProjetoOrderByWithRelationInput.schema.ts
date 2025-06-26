import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjetoOrderByWithRelationInputObjectSchema } from './ProjetoOrderByWithRelationInput.schema';
import { BrainstormingOrderByWithRelationInputObjectSchema } from './BrainstormingOrderByWithRelationInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoOrderByWithRelationInput> = z
  .object({
    projetoId: z.lazy(() => SortOrderSchema).optional(),
    brainstormingId: z.lazy(() => SortOrderSchema).optional(),
    projeto: z
      .lazy(() => ProjetoOrderByWithRelationInputObjectSchema)
      .optional(),
    brainstorming: z
      .lazy(() => BrainstormingOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const BrainstormingProjetoOrderByWithRelationInputObjectSchema = Schema;
