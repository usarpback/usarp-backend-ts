import { z } from 'zod';
import { BrainstormingCreateWithoutCriadorInputObjectSchema } from './BrainstormingCreateWithoutCriadorInput.schema';
import { BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedCreateWithoutCriadorInput.schema';
import { BrainstormingCreateOrConnectWithoutCriadorInputObjectSchema } from './BrainstormingCreateOrConnectWithoutCriadorInput.schema';
import { BrainstormingUpsertWithWhereUniqueWithoutCriadorInputObjectSchema } from './BrainstormingUpsertWithWhereUniqueWithoutCriadorInput.schema';
import { BrainstormingCreateManyCriadorInputEnvelopeObjectSchema } from './BrainstormingCreateManyCriadorInputEnvelope.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingUpdateWithWhereUniqueWithoutCriadorInputObjectSchema } from './BrainstormingUpdateWithWhereUniqueWithoutCriadorInput.schema';
import { BrainstormingUpdateManyWithWhereWithoutCriadorInputObjectSchema } from './BrainstormingUpdateManyWithWhereWithoutCriadorInput.schema';
import { BrainstormingScalarWhereInputObjectSchema } from './BrainstormingScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUncheckedUpdateManyWithoutCriadorNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BrainstormingCreateWithoutCriadorInputObjectSchema),
          z
            .lazy(() => BrainstormingCreateWithoutCriadorInputObjectSchema)
            .array(),
          z.lazy(
            () => BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema,
          ),
          z
            .lazy(
              () => BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => BrainstormingCreateOrConnectWithoutCriadorInputObjectSchema,
          ),
          z
            .lazy(
              () => BrainstormingCreateOrConnectWithoutCriadorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BrainstormingUpsertWithWhereUniqueWithoutCriadorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingUpsertWithWhereUniqueWithoutCriadorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => BrainstormingCreateManyCriadorInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BrainstormingUpdateWithWhereUniqueWithoutCriadorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingUpdateWithWhereUniqueWithoutCriadorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BrainstormingUpdateManyWithWhereWithoutCriadorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BrainstormingUpdateManyWithWhereWithoutCriadorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => BrainstormingScalarWhereInputObjectSchema),
          z.lazy(() => BrainstormingScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingUncheckedUpdateManyWithoutCriadorNestedInputObjectSchema =
  Schema;
