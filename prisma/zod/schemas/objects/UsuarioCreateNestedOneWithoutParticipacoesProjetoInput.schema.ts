import { z } from 'zod';
import { UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioCreateOrConnectWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateOrConnectWithoutParticipacoesProjetoInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutParticipacoesProjetoInput> =
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
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UsuarioCreateNestedOneWithoutParticipacoesProjetoInputObjectSchema =
  Schema;
