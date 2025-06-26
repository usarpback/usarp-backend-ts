import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumPapelProjetoFilter> = z
  .object({
    equals: z.lazy(() => PapelProjetoSchema).optional(),
    in: z
      .union([
        z.lazy(() => PapelProjetoSchema).array(),
        z.lazy(() => PapelProjetoSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => PapelProjetoSchema).array(),
        z.lazy(() => PapelProjetoSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => PapelProjetoSchema),
        z.lazy(() => NestedEnumPapelProjetoFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumPapelProjetoFilterObjectSchema = Schema;
