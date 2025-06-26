import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { EnumStatusProjetoFieldUpdateOperationsInputObjectSchema } from './EnumStatusProjetoFieldUpdateOperationsInput.schema';
import { ProjetoUsuarioUpdateManyWithoutProjetoNestedInputObjectSchema } from './ProjetoUsuarioUpdateManyWithoutProjetoNestedInput.schema';
import { BrainstormingProjetoUpdateManyWithoutProjetoNestedInputObjectSchema } from './BrainstormingProjetoUpdateManyWithoutProjetoNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateWithoutCriadorInput> = z
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
    membros: z
      .lazy(() => ProjetoUsuarioUpdateManyWithoutProjetoNestedInputObjectSchema)
      .optional(),
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoUpdateManyWithoutProjetoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoUpdateWithoutCriadorInputObjectSchema = Schema;
