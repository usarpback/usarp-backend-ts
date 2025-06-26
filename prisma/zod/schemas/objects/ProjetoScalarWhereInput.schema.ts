import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStatusProjetoFilterObjectSchema } from './EnumStatusProjetoFilter.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoScalarWhereInputObjectSchema),
        z.lazy(() => ProjetoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoScalarWhereInputObjectSchema),
        z.lazy(() => ProjetoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    nomeProjeto: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    descricao: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    criadorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumStatusProjetoFilterObjectSchema),
        z.lazy(() => StatusProjetoSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjetoScalarWhereInputObjectSchema = Schema;
