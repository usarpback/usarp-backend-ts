import { z } from 'zod';
import { BrainstormingProjetoCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateOrConnectWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateOrConnectWithoutProjetoInput.schema';
import { BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateManyProjetoInputEnvelopeObjectSchema } from './BrainstormingProjetoCreateManyProjetoInputEnvelope.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput.schema';
import { BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput.schema';
import { BrainstormingProjetoScalarWhereInputObjectSchema } from './BrainstormingProjetoScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateManyWithoutProjetoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BrainstormingProjetoCreateWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () => BrainstormingProjetoCreateWithoutProjetoInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoCreateOrConnectWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoCreateOrConnectWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => BrainstormingProjetoCreateManyProjetoInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingProjetoUpdateManyWithoutProjetoNestedInputObjectSchema =
  Schema;
