import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPapelProjetoFilterObjectSchema } from './NestedEnumPapelProjetoFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumPapelProjetoWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumPapelProjetoWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPapelProjetoFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPapelProjetoFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumPapelProjetoWithAggregatesFilterObjectSchema = Schema;
