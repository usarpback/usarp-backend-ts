import { z } from 'zod';
import { BrainstormingProjetoCreateNestedManyWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateNestedManyWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateWithoutCriadorInput> = z
  .object({
    id: z.string().optional(),
    titulo: z.string(),
    projetoRelacionado: z.string(),
    data: z.string(),
    horario: z.string(),
    historiasUsuario: z.string(),
    projetos: z
      .lazy(
        () =>
          BrainstormingProjetoCreateNestedManyWithoutBrainstormingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingCreateWithoutCriadorInputObjectSchema = Schema;
