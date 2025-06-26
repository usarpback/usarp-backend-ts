import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateNestedManyWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUncheckedCreateInput> = z
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
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoUncheckedCreateInputObjectSchema = Schema;
