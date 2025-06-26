import { z } from 'zod';
import { GeneroSchema } from '../enums/Genero.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumGeneroFilter> = z
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
        z.lazy(() => NestedEnumGeneroFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumGeneroFilterObjectSchema = Schema;
