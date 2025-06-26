import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const UsuarioWhereUniqueInputObjectSchema = Schema;
