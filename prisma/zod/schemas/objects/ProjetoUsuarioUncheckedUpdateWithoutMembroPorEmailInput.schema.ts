import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';
import { EnumPapelProjetoFieldUpdateOperationsInputObjectSchema } from './EnumPapelProjetoFieldUpdateOperationsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      projetoId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      membroId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      nomeMembro: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      papelNoProjeto: z
        .union([
          z.lazy(() => PapelProjetoSchema),
          z.lazy(() => EnumPapelProjetoFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInputObjectSchema =
  Schema;
