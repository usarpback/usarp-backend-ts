import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutProjetoInput.schema';
import { ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput.schema';
import { ProjetoUsuarioCreateManyProjetoInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyProjetoInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput.schema';
import { ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput.schema';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateManyWithoutProjetoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema),
          z
            .lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema)
            .array(),
          z.lazy(
            () => ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjetoUsuarioCreateManyProjetoInputEnvelopeObjectSchema)
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
              ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInputObjectSchema,
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

export const ProjetoUsuarioUpdateManyWithoutProjetoNestedInputObjectSchema =
  Schema;
