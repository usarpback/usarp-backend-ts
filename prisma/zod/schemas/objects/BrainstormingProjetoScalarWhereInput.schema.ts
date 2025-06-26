import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema),
        z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema),
        z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    projetoId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    brainstormingId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const BrainstormingProjetoScalarWhereInputObjectSchema = Schema;
