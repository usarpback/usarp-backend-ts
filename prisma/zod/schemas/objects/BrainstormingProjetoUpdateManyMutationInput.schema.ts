import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateManyMutationInput> = z
  .object({})
  .strict();

export const BrainstormingProjetoUpdateManyMutationInputObjectSchema = Schema;
