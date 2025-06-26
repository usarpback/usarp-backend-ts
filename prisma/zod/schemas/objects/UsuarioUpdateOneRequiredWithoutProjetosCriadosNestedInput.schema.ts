import { z } from 'zod';
import { UsuarioCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutProjetosCriadosInput.schema';
import { UsuarioCreateOrConnectWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateOrConnectWithoutProjetosCriadosInput.schema';
import { UsuarioUpsertWithoutProjetosCriadosInputObjectSchema } from './UsuarioUpsertWithoutProjetosCriadosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUpdateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedUpdateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutProjetosCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UsuarioCreateWithoutProjetosCriadosInputObjectSchema),
          z.lazy(
            () => UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UsuarioCreateOrConnectWithoutProjetosCriadosInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UsuarioUpsertWithoutProjetosCriadosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UsuarioUpdateWithoutProjetosCriadosInputObjectSchema),
          z.lazy(
            () => UsuarioUncheckedUpdateWithoutProjetosCriadosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutProjetosCriadosNestedInputObjectSchema =
  Schema;
