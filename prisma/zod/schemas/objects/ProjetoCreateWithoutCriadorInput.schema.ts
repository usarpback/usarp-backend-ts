import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { ProjetoUsuarioCreateNestedManyWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateNestedManyWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateNestedManyWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateWithoutCriadorInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string(),
    descricao: z.string().optional().nullable(),
    status: z.lazy(() => StatusProjetoSchema).optional(),
    membros: z
      .lazy(() => ProjetoUsuarioCreateNestedManyWithoutProjetoInputObjectSchema)
      .optional(),
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoCreateNestedManyWithoutProjetoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoCreateWithoutCriadorInputObjectSchema = Schema;
