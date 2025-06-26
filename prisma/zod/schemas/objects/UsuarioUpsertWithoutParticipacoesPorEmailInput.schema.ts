import { z } from 'zod';
import { UsuarioUpdateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUpdateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutParticipacoesPorEmailInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UsuarioUpdateWithoutParticipacoesPorEmailInputObjectSchema,
        ),
        z.lazy(
          () =>
            UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema,
        ),
        z.lazy(
          () =>
            UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UsuarioUpsertWithoutParticipacoesPorEmailInputObjectSchema =
  Schema;
