import { z } from 'zod';
import { PerfilSchema } from '../enums/Perfil.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.EnumPerfilFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PerfilSchema).optional(),
  })
  .strict();

export const EnumPerfilFieldUpdateOperationsInputObjectSchema = Schema;
