import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPapelProjetoFilterObjectSchema } from './EnumPapelProjetoFilter.schema';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
        z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
        z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projetoId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    membroId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    nomeMembro: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    emailMembro: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    papelNoProjeto: z
      .union([
        z.lazy(() => EnumPapelProjetoFilterObjectSchema),
        z.lazy(() => PapelProjetoSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjetoUsuarioScalarWhereInputObjectSchema = Schema;
