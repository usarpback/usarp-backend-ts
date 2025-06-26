import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInputObjectSchema } from './BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateWithoutCriadorInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    titulo: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    projetoRelacionado: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    data: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    horario: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    historiasUsuario: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    projetos: z
      .lazy(
        () =>
          BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingUpdateWithoutCriadorInputObjectSchema = Schema;
