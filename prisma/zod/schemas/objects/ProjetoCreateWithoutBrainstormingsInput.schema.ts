import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateNestedOneWithoutProjetosCriadosInput.schema';
import { ProjetoUsuarioCreateNestedManyWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateWithoutBrainstormingsInput> = z
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
  })
  .strict();

export const ProjetoCreateWithoutBrainstormingsInputObjectSchema = Schema;
