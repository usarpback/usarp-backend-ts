import { z } from 'zod';
import { BrainstormingProjetoCreateManyBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateManyBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateManyBrainstormingInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => BrainstormingProjetoCreateManyBrainstormingInputObjectSchema,
        ),
        z
          .lazy(
            () => BrainstormingProjetoCreateManyBrainstormingInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BrainstormingProjetoCreateManyBrainstormingInputEnvelopeObjectSchema =
  Schema;
