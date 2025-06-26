import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioCreateManyMembroPorEmailInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProjetoUsuarioCreateManyMembroPorEmailInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInputObjectSchema =
  Schema;
