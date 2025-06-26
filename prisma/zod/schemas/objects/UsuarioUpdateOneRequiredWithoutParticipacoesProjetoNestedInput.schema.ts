import { z } from 'zod';
import { UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioCreateOrConnectWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateOrConnectWithoutParticipacoesProjetoInput.schema';
import { UsuarioUpsertWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUpsertWithoutParticipacoesProjetoInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUpdateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedUpdateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UsuarioCreateOrConnectWithoutParticipacoesProjetoInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UsuarioUpsertWithoutParticipacoesProjetoInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UsuarioUpdateWithoutParticipacoesProjetoInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedUpdateWithoutParticipacoesProjetoInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutParticipacoesProjetoNestedInputObjectSchema =
  Schema;
