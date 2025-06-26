import { z } from 'zod';
import { UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioCreateOrConnectWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUpsertWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUpsertWithoutParticipacoesPorEmailInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUpdateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UsuarioCreateOrConnectWithoutParticipacoesPorEmailInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UsuarioUpsertWithoutParticipacoesPorEmailInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UsuarioUpdateWithoutParticipacoesPorEmailInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedUpdateWithoutParticipacoesPorEmailInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutParticipacoesPorEmailNestedInputObjectSchema =
  Schema;
