import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GeneroSchema } from '../enums/Genero.schema';
import { EnumGeneroFieldUpdateOperationsInputObjectSchema } from './EnumGeneroFieldUpdateOperationsInput.schema';
import { PerfilSchema } from '../enums/Perfil.schema';
import { EnumPerfilFieldUpdateOperationsInputObjectSchema } from './EnumPerfilFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProjetoUncheckedUpdateManyWithoutCriadorNestedInputObjectSchema } from './ProjetoUncheckedUpdateManyWithoutCriadorNestedInput.schema';
import { BrainstormingUncheckedUpdateManyWithoutCriadorNestedInputObjectSchema } from './BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    nomeCompleto: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    senha: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    genero: z
      .union([
        z.lazy(() => GeneroSchema),
        z.lazy(() => EnumGeneroFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    dataNascimento: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    perfil: z
      .union([
        z.lazy(() => PerfilSchema),
        z.lazy(() => EnumPerfilFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    organizacao: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tentativasLogin: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    tentativasExclusao: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    bloqueadoAte: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    tokenRedefinirSenha: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    expiraRedefinirSenha: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    projetosCriados: z
      .lazy(
        () => ProjetoUncheckedUpdateManyWithoutCriadorNestedInputObjectSchema,
      )
      .optional(),
    brainstormingsCriados: z
      .lazy(
        () =>
          BrainstormingUncheckedUpdateManyWithoutCriadorNestedInputObjectSchema,
      )
      .optional(),
    participacoesProjeto: z
      .lazy(
        () =>
          ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInputObjectSchema,
      )
      .optional(),
    participacoesPorEmail: z
      .lazy(
        () =>
          ProjetoUsuarioUncheckedUpdateManyWithoutMembroPorEmailNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const UsuarioUncheckedUpdateInputObjectSchema = Schema;
