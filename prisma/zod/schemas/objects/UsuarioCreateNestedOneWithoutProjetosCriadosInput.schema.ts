import { z } from 'zod';
import { UsuarioCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutProjetosCriadosInput.schema';
import { UsuarioCreateOrConnectWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateOrConnectWithoutProjetosCriadosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutProjetosCriadosInput> =
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
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UsuarioCreateNestedOneWithoutProjetosCriadosInputObjectSchema =
  Schema;
