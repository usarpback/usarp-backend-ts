import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string().optional(),
  })
  .strict();

export const ProjetoWhereUniqueInputObjectSchema = Schema;
