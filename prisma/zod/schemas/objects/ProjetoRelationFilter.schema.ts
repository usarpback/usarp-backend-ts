import { z } from 'zod';
import { ProjetoWhereInputObjectSchema } from './ProjetoWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProjetoWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProjetoWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProjetoRelationFilterObjectSchema = Schema;
