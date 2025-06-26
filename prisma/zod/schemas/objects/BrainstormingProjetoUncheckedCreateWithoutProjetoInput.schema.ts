import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUncheckedCreateWithoutProjetoInput> =
  z
    .object({
      brainstormingId: z.string(),
    })
    .strict();

export const BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema =
  Schema;
