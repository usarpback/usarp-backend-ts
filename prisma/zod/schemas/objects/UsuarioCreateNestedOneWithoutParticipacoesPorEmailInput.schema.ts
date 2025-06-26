import { z } from 'zod';
import { UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioCreateOrConnectWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput> =
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
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UsuarioCreateNestedOneWithoutParticipacoesPorEmailInputObjectSchema =
  Schema;
