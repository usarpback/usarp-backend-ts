import { z } from 'zod';
import { BrainstormingCreateManyCriadorInputObjectSchema } from './BrainstormingCreateManyCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateManyCriadorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BrainstormingCreateManyCriadorInputObjectSchema),
      z.lazy(() => BrainstormingCreateManyCriadorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BrainstormingCreateManyCriadorInputEnvelopeObjectSchema = Schema;
