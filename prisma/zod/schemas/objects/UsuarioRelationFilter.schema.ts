import { z } from 'zod';
import { UsuarioWhereInputObjectSchema } from './UsuarioWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioRelationFilter> = z
  .object({
    is: z
      .lazy(() => UsuarioWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UsuarioWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UsuarioRelationFilterObjectSchema = Schema;
