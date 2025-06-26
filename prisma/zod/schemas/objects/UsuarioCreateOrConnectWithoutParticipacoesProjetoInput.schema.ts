import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutParticipacoesProjetoInput> =
  z
    .object({
      where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema),
        z.lazy(
          () =>
            UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UsuarioCreateOrConnectWithoutParticipacoesProjetoInputObjectSchema =
  Schema;
