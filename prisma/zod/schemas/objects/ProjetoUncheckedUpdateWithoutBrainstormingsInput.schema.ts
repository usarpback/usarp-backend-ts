import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { EnumStatusProjetoFieldUpdateOperationsInputObjectSchema } from './EnumStatusProjetoFieldUpdateOperationsInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUncheckedUpdateWithoutBrainstormingsInput> =
  z
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
      criadorId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      status: z
        .union([
          z.lazy(() => StatusProjetoSchema),
          z.lazy(() => EnumStatusProjetoFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      membros: z
        .lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateManyWithoutProjetoNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ProjetoUncheckedUpdateWithoutBrainstormingsInputObjectSchema =
  Schema;
