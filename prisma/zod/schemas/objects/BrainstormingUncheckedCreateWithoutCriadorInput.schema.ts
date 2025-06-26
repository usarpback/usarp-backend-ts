import { z } from 'zod';
import { BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUncheckedCreateWithoutCriadorInput> =
  z
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
            BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema =
  Schema;
