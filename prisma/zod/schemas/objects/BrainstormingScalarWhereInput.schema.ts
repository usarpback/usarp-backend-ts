import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrainstormingScalarWhereInputObjectSchema),
        z.lazy(() => BrainstormingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrainstormingScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrainstormingScalarWhereInputObjectSchema),
        z.lazy(() => BrainstormingScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    criadorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    titulo: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projetoRelacionado: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    horario: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    historiasUsuario: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const BrainstormingScalarWhereInputObjectSchema = Schema;
