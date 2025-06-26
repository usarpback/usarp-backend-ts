import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateNestedOneWithoutProjetosCriadosInput.schema';
import { ProjetoUsuarioCreateNestedManyWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateNestedManyWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateNestedManyWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string(),
    descricao: z.string().optional().nullable(),
    status: z.lazy(() => StatusProjetoSchema).optional(),
    criador: z.lazy(
      () => UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema,
    ),
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

export const ProjetoCreateInputObjectSchema = Schema;
