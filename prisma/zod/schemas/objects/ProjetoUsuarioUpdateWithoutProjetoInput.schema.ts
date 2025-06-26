import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';
import { EnumPapelProjetoFieldUpdateOperationsInputObjectSchema } from './EnumPapelProjetoFieldUpdateOperationsInput.schema';
import { UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput.schema';
import { UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInputObjectSchema } from './UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateWithoutProjetoInput> = z
  .object({
    id: z
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
    membro: z
      .lazy(
        () =>
          UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInputObjectSchema,
      )
      .optional(),
    membroPorEmail: z
      .lazy(
        () =>
          UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProjetoUsuarioUpdateWithoutProjetoInputObjectSchema = Schema;
