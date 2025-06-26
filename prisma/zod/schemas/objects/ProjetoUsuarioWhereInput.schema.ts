import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPapelProjetoFilterObjectSchema } from './EnumPapelProjetoFilter.schema';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';
import { ProjetoRelationFilterObjectSchema } from './ProjetoRelationFilter.schema';
import { ProjetoWhereInputObjectSchema } from './ProjetoWhereInput.schema';
import { UsuarioRelationFilterObjectSchema } from './UsuarioRelationFilter.schema';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoUsuarioWhereInputObjectSchema),
        z.lazy(() => ProjetoUsuarioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoUsuarioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoUsuarioWhereInputObjectSchema),
        z.lazy(() => ProjetoUsuarioWhereInputObjectSchema).array(),
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
    projeto: z
      .union([
        z.lazy(() => ProjetoRelationFilterObjectSchema),
        z.lazy(() => ProjetoWhereInputObjectSchema),
      ])
      .optional(),
    membro: z
      .union([
        z.lazy(() => UsuarioRelationFilterObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema),
      ])
      .optional(),
    membroPorEmail: z
      .union([
        z.lazy(() => UsuarioRelationFilterObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProjetoUsuarioWhereInputObjectSchema = Schema;
