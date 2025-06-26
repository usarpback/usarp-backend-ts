import { z } from 'zod';
import { GeneroSchema } from '../enums/Genero.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.EnumGeneroFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => GeneroSchema).optional(),
  })
  .strict();

export const EnumGeneroFieldUpdateOperationsInputObjectSchema = Schema;
