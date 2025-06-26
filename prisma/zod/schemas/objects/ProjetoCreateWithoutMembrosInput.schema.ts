import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateNestedOneWithoutProjetosCriadosInput.schema';
import { BrainstormingProjetoCreateNestedManyWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateWithoutMembrosInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string(),
    descricao: z.string().optional().nullable(),
    status: z.lazy(() => StatusProjetoSchema).optional(),
    criador: z.lazy(
      () => UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema,
    ),
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoCreateNestedManyWithoutProjetoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoCreateWithoutMembrosInputObjectSchema = Schema;
