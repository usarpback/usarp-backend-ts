import { z } from 'zod';
import { ProjetoWhereInputObjectSchema } from './ProjetoWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoListRelationFilter> = z
  .object({
    every: z.lazy(() => ProjetoWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProjetoWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProjetoWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProjetoListRelationFilterObjectSchema = Schema;
