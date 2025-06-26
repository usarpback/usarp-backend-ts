import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      projetoId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      brainstormingId: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema =
  Schema;
