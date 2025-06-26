import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumGeneroFilterObjectSchema } from './EnumGeneroFilter.schema';
import { GeneroSchema } from '../enums/Genero.schema';
import { EnumPerfilFilterObjectSchema } from './EnumPerfilFilter.schema';
import { PerfilSchema } from '../enums/Perfil.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { ProjetoListRelationFilterObjectSchema } from './ProjetoListRelationFilter.schema';
import { BrainstormingListRelationFilterObjectSchema } from './BrainstormingListRelationFilter.schema';
import { ProjetoUsuarioListRelationFilterObjectSchema } from './ProjetoUsuarioListRelationFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UsuarioWhereInputObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UsuarioWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UsuarioWhereInputObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    nomeCompleto: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    senha: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    genero: z
      .union([
        z.lazy(() => EnumGeneroFilterObjectSchema),
        z.lazy(() => GeneroSchema),
      ])
      .optional(),
    dataNascimento: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    perfil: z
      .union([
        z.lazy(() => EnumPerfilFilterObjectSchema),
        z.lazy(() => PerfilSchema),
      ])
      .optional(),
    organizacao: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tentativasLogin: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    tentativasExclusao: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    bloqueadoAte: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    tokenRedefinirSenha: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    expiraRedefinirSenha: z
      .union([
        z.lazy(() => DateTimeNullableFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    projetosCriados: z
      .lazy(() => ProjetoListRelationFilterObjectSchema)
      .optional(),
    brainstormingsCriados: z
      .lazy(() => BrainstormingListRelationFilterObjectSchema)
      .optional(),
    participacoesProjeto: z
      .lazy(() => ProjetoUsuarioListRelationFilterObjectSchema)
      .optional(),
    participacoesPorEmail: z
      .lazy(() => ProjetoUsuarioListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioWhereInputObjectSchema = Schema;
