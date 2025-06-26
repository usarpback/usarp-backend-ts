import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateManyBrainstormingInput> =
  z
    .object({
      projetoId: z.string(),
    })
    .strict();

export const BrainstormingProjetoCreateManyBrainstormingInputObjectSchema =
  Schema;
