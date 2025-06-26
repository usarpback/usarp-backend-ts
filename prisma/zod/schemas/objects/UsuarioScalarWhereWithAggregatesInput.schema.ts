import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumGeneroWithAggregatesFilterObjectSchema } from './EnumGeneroWithAggregatesFilter.schema';
import { GeneroSchema } from '../enums/Genero.schema';
import { EnumPerfilWithAggregatesFilterObjectSchema } from './EnumPerfilWithAggregatesFilter.schema';
import { PerfilSchema } from '../enums/Perfil.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UsuarioScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    nomeCompleto: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    senha: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    genero: z
      .union([
        z.lazy(() => EnumGeneroWithAggregatesFilterObjectSchema),
        z.lazy(() => GeneroSchema),
      ])
      .optional(),
    dataNascimento: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    perfil: z
      .union([
        z.lazy(() => EnumPerfilWithAggregatesFilterObjectSchema),
        z.lazy(() => PerfilSchema),
      ])
      .optional(),
    organizacao: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    tentativasLogin: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    tentativasExclusao: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    bloqueadoAte: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
    tokenRedefinirSenha: z
      .union([
        z.lazy(() => StringNullableWithAggregatesFilterObjectSchema),
        z.string(),
      ])
      .optional()
      .nullable(),
    expiraRedefinirSenha: z
      .union([
        z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
        z.coerce.date(),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const UsuarioScalarWhereWithAggregatesInputObjectSchema = Schema;
