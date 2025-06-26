import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { NestedEnumStatusProjetoWithAggregatesFilterObjectSchema } from './NestedEnumStatusProjetoWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStatusProjetoFilterObjectSchema } from './NestedEnumStatusProjetoFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.EnumStatusProjetoWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumStatusProjetoWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumStatusProjetoFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumStatusProjetoFilterObjectSchema).optional(),
  })
  .strict();

export const EnumStatusProjetoWithAggregatesFilterObjectSchema = Schema;
