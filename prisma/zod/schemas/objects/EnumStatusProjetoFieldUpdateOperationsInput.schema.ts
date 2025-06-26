import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.EnumStatusProjetoFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => StatusProjetoSchema).optional(),
  })
  .strict();

export const EnumStatusProjetoFieldUpdateOperationsInputObjectSchema = Schema;
