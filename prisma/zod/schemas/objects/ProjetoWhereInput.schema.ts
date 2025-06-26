import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumStatusProjetoFilterObjectSchema } from './EnumStatusProjetoFilter.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { UsuarioRelationFilterObjectSchema } from './UsuarioRelationFilter.schema';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { ProjetoUsuarioListRelationFilterObjectSchema } from './ProjetoUsuarioListRelationFilter.schema';
import { BrainstormingProjetoListRelationFilterObjectSchema } from './BrainstormingProjetoListRelationFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProjetoWhereInputObjectSchema),
        z.lazy(() => ProjetoWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProjetoWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProjetoWhereInputObjectSchema),
        z.lazy(() => ProjetoWhereInputObjectSchema).array(),
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
    criador: z
      .union([
        z.lazy(() => UsuarioRelationFilterObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema),
      ])
      .optional(),
    membros: z
      .lazy(() => ProjetoUsuarioListRelationFilterObjectSchema)
      .optional(),
    brainstormings: z
      .lazy(() => BrainstormingProjetoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const ProjetoWhereInputObjectSchema = Schema;
