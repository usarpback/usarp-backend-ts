import { z } from 'zod';
import { BrainstormingProjetoCreateManyProjetoInputObjectSchema } from './BrainstormingProjetoCreateManyProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateManyProjetoInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BrainstormingProjetoCreateManyProjetoInputObjectSchema),
        z
          .lazy(() => BrainstormingProjetoCreateManyProjetoInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BrainstormingProjetoCreateManyProjetoInputEnvelopeObjectSchema =
  Schema;
