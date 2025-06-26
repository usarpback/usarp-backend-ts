import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPapelProjetoWithAggregatesFilterObjectSchema } from './EnumPapelProjetoWithAggregatesFilter.schema';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema),
        z
          .lazy(() => ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema)
          .array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    projetoId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    membroId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    nomeMembro: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    emailMembro: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    papelNoProjeto: z
      .union([
        z.lazy(() => EnumPapelProjetoWithAggregatesFilterObjectSchema),
        z.lazy(() => PapelProjetoSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema = Schema;
