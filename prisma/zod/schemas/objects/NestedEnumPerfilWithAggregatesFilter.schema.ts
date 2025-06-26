import { z } from 'zod';
import { PerfilSchema } from '../enums/Perfil.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPerfilFilterObjectSchema } from './NestedEnumPerfilFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.NestedEnumPerfilWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PerfilSchema).optional(),
    in: z
      .union([z.lazy(() => PerfilSchema).array(), z.lazy(() => PerfilSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => PerfilSchema).array(), z.lazy(() => PerfilSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => PerfilSchema),
        z.lazy(() => NestedEnumPerfilWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPerfilFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPerfilFilterObjectSchema).optional(),
  })
  .strict();

export const NestedEnumPerfilWithAggregatesFilterObjectSchema = Schema;
