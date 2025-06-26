import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProjetoRelationFilterObjectSchema } from './ProjetoRelationFilter.schema';
import { ProjetoWhereInputObjectSchema } from './ProjetoWhereInput.schema';
import { BrainstormingRelationFilterObjectSchema } from './BrainstormingRelationFilter.schema';
import { BrainstormingWhereInputObjectSchema } from './BrainstormingWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrainstormingProjetoWhereInputObjectSchema),
        z.lazy(() => BrainstormingProjetoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrainstormingProjetoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrainstormingProjetoWhereInputObjectSchema),
        z.lazy(() => BrainstormingProjetoWhereInputObjectSchema).array(),
      ])
      .optional(),
    projetoId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    brainstormingId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projeto: z
      .union([
        z.lazy(() => ProjetoRelationFilterObjectSchema),
        z.lazy(() => ProjetoWhereInputObjectSchema),
      ])
      .optional(),
    brainstorming: z
      .union([
        z.lazy(() => BrainstormingRelationFilterObjectSchema),
        z.lazy(() => BrainstormingWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BrainstormingProjetoWhereInputObjectSchema = Schema;
