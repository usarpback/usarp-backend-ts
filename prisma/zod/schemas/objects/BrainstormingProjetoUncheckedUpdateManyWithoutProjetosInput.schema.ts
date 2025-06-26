import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUncheckedUpdateManyWithoutProjetosInput> =
  z
    .object({
      projetoId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingProjetoUncheckedUpdateManyWithoutProjetosInputObjectSchema =
  Schema;
