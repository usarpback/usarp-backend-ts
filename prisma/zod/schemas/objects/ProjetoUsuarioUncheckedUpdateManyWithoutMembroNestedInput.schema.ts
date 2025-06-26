import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutMembroInput.schema';
import { ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInputObjectSchema } from './ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput.schema';
import { ProjetoUsuarioCreateManyMembroInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyMembroInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInputObjectSchema } from './ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput.schema';
import { ProjetoUsuarioUpdateManyWithWhereWithoutMembroInputObjectSchema } from './ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput.schema';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema),
          z
            .lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema)
            .array(),
          z.lazy(
            () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjetoUsuarioCreateManyMembroInputEnvelopeObjectSchema)
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
              ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProjetoUsuarioUpdateManyWithWhereWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUpdateManyWithWhereWithoutMembroInputObjectSchema,
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

export const ProjetoUsuarioUncheckedUpdateManyWithoutMembroNestedInputObjectSchema =
  Schema;
