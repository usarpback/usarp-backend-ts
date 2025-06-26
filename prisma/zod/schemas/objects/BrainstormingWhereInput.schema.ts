import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UsuarioRelationFilterObjectSchema } from './UsuarioRelationFilter.schema';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';
import { BrainstormingProjetoListRelationFilterObjectSchema } from './BrainstormingProjetoListRelationFilter.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => BrainstormingWhereInputObjectSchema),
        z.lazy(() => BrainstormingWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => BrainstormingWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => BrainstormingWhereInputObjectSchema),
        z.lazy(() => BrainstormingWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    criadorId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    titulo: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    projetoRelacionado: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    data: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    horario: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    historiasUsuario: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    criador: z
      .union([
        z.lazy(() => UsuarioRelationFilterObjectSchema),
        z.lazy(() => UsuarioWhereInputObjectSchema),
      ])
      .optional(),
    projetos: z
      .lazy(() => BrainstormingProjetoListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const BrainstormingWhereInputObjectSchema = Schema;
