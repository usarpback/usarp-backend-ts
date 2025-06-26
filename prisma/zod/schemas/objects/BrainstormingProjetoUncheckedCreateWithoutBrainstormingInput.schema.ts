import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput> =
  z
    .object({
      projetoId: z.string(),
    })
    .strict();

export const BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema =
  Schema;
