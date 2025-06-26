import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUncheckedCreateWithoutProjetosInput> =
  z
    .object({
      id: z.string().optional(),
      criadorId: z.string(),
      titulo: z.string(),
      projetoRelacionado: z.string(),
      data: z.string(),
      horario: z.string(),
      historiasUsuario: z.string(),
    })
    .strict();

export const BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema =
  Schema;
