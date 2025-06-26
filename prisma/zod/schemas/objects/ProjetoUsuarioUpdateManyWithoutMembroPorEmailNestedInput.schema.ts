import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioCreateManyMembroPorEmailInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => ProjetoUsuarioCreateManyMembroPorEmailInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
          z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUsuarioUpdateManyWithoutMembroPorEmailNestedInputObjectSchema =
  Schema;
