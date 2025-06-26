import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutProjetosCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutProjetosCriadosInput> =
  z
    .object({
      where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UsuarioCreateWithoutProjetosCriadosInputObjectSchema),
        z.lazy(
          () => UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UsuarioCreateOrConnectWithoutProjetosCriadosInputObjectSchema =
  Schema;
