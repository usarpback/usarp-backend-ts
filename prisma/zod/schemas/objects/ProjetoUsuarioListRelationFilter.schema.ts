import { z } from 'zod';
import { ProjetoUsuarioWhereInputObjectSchema } from './ProjetoUsuarioWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioListRelationFilter> = z
  .object({
    every: z.lazy(() => ProjetoUsuarioWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProjetoUsuarioWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProjetoUsuarioWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProjetoUsuarioListRelationFilterObjectSchema = Schema;
