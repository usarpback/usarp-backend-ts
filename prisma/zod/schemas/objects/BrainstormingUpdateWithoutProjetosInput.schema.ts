import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateWithoutProjetosInput> = z
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
  })
  .strict();

export const BrainstormingUpdateWithoutProjetosInputObjectSchema = Schema;
