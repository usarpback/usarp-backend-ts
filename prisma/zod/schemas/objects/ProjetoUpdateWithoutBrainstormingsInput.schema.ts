import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { EnumStatusProjetoFieldUpdateOperationsInputObjectSchema } from './EnumStatusProjetoFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput.schema';
import { ProjetoUsuarioUpdateManyWithoutProjetoNestedInputObjectSchema } from './ProjetoUsuarioUpdateManyWithoutProjetoNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateWithoutBrainstormingsInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nomeProjeto: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    descricao: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    status: z
      .union([
        z.lazy(() => StatusProjetoSchema),
        z.lazy(() => EnumStatusProjetoFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    criador: z
      .lazy(
        () =>
          UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInputObjectSchema,
      )
      .optional(),
    membros: z
      .lazy(() => ProjetoUsuarioUpdateManyWithoutProjetoNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjetoUpdateWithoutBrainstormingsInputObjectSchema = Schema;
