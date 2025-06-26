import { z } from 'zod';
import { GeneroSchema } from '../enums/Genero.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGeneroFilterObjectSchema } from './NestedEnumGeneroFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumGeneroWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => GeneroSchema).optional(),
    in: z
      .union([z.lazy(() => GeneroSchema).array(), z.lazy(() => GeneroSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => GeneroSchema).array(), z.lazy(() => GeneroSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => GeneroSchema),
        z.lazy(() => NestedEnumGeneroWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumGeneroFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumGeneroFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumGeneroWithAggregatesFilterObjectSchema = Schema;
