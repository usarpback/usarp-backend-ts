import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateWithoutParticipacoesPorEmailInput.schema';
import { UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutParticipacoesPorEmailInput> =
  z
    .object({
      where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
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

export const UsuarioCreateOrConnectWithoutParticipacoesPorEmailInputObjectSchema =
  Schema;
