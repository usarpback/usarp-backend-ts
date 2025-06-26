import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput.schema';
import { BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInputObjectSchema } from './BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateInput> = z
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
    criador: z
      .lazy(
        () =>
          UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInputObjectSchema,
      )
      .optional(),
    projetos: z
      .lazy(
        () =>
          BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingUpdateInputObjectSchema = Schema;
