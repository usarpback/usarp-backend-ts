import { z } from 'zod';
import { ProjetoCreateManyCriadorInputObjectSchema } from './ProjetoCreateManyCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateManyCriadorInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProjetoCreateManyCriadorInputObjectSchema),
      z.lazy(() => ProjetoCreateManyCriadorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjetoCreateManyCriadorInputEnvelopeObjectSchema = Schema;
