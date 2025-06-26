import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUncheckedCreateWithoutMembrosInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string(),
    descricao: z.string().optional().nullable(),
    criadorId: z.string(),
    status: z.lazy(() => StatusProjetoSchema).optional(),
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoUncheckedCreateWithoutMembrosInputObjectSchema = Schema;
