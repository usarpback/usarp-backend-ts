import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';
import { EnumStatusProjetoFieldUpdateOperationsInputObjectSchema } from './EnumStatusProjetoFieldUpdateOperationsInput.schema';
import { BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUncheckedUpdateWithoutMembrosInput> = z
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
    brainstormings: z
      .lazy(
        () =>
          BrainstormingProjetoUncheckedUpdateManyWithoutProjetoNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoUncheckedUpdateWithoutMembrosInputObjectSchema = Schema;
