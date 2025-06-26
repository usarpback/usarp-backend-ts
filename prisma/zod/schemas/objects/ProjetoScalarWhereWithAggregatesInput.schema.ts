import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumStatusProjetoWithAggregatesFilterObjectSchema } from './EnumStatusProjetoWithAggregatesFilter.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ProjetoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => ProjetoScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    nomeProjeto: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    descricao: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    criadorId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusProjetoWithAggregatesFilterObjectSchema),
        z.lazy(() => StatusProjetoSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjetoScalarWhereWithAggregatesInputObjectSchema = Schema;
