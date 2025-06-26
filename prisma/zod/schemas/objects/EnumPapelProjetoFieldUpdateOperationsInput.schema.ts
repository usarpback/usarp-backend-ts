import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.EnumPapelProjetoFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PapelProjetoSchema).optional(),
  })
  .strict();

export const EnumPapelProjetoFieldUpdateOperationsInputObjectSchema = Schema;
