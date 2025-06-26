import { z } from 'zod';
import { BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoCreateOrConnectWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput.schema';
import { BrainstormingProjetoCreateManyBrainstormingInputEnvelopeObjectSchema } from './BrainstormingProjetoCreateManyBrainstormingInputEnvelope.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput.schema';
import { BrainstormingProjetoScalarWhereInputObjectSchema } from './BrainstormingProjetoScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoCreateOrConnectWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoCreateOrConnectWithoutBrainstormingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BrainstormingProjetoCreateManyBrainstormingInputEnvelopeObjectSchema,
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
              BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInputObjectSchema,
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

export const BrainstormingProjetoUpdateManyWithoutBrainstormingNestedInputObjectSchema =
  Schema;
