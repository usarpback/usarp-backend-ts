import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumStatusProjetoFilter> = z
  .object({
    equals: z.lazy(() => StatusProjetoSchema).optional(),
    in: z
      .union([
        z.lazy(() => StatusProjetoSchema).array(),
        z.lazy(() => StatusProjetoSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => StatusProjetoSchema).array(),
        z.lazy(() => StatusProjetoSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => StatusProjetoSchema),
        z.lazy(() => NestedEnumStatusProjetoFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumStatusProjetoFilterObjectSchema = Schema;
