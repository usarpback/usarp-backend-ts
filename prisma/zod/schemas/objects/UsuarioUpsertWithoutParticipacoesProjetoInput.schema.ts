import { z } from 'zod';
import { UsuarioUpdateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUpdateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedUpdateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedUpdateWithoutParticipacoesProjetoInput.schema';
import { UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateWithoutParticipacoesProjetoInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutParticipacoesProjetoInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UsuarioUpdateWithoutParticipacoesProjetoInputObjectSchema),
        z.lazy(
          () =>
            UsuarioUncheckedUpdateWithoutParticipacoesProjetoInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema),
        z.lazy(
          () =>
            UsuarioUncheckedCreateWithoutParticipacoesProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UsuarioUpsertWithoutParticipacoesProjetoInputObjectSchema = Schema;
