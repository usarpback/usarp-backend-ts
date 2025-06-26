import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUncheckedCreateWithoutBrainstormingsInput> =
  z
    .object({
      id: z.string().optional(),
      nomeProjeto: z.string(),
      descricao: z.string().optional().nullable(),
      criadorId: z.string(),
      status: z.lazy(() => StatusProjetoSchema).optional(),
      membros: z
        .lazy(
          () =>
            ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema =
  Schema;
