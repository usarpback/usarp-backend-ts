import { z } from 'zod';
import { BrainstormingCreateWithoutCriadorInputObjectSchema } from './BrainstormingCreateWithoutCriadorInput.schema';
import { BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedCreateWithoutCriadorInput.schema';
import { BrainstormingCreateOrConnectWithoutCriadorInputObjectSchema } from './BrainstormingCreateOrConnectWithoutCriadorInput.schema';
import { BrainstormingCreateManyCriadorInputEnvelopeObjectSchema } from './BrainstormingCreateManyCriadorInputEnvelope.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateNestedManyWithoutCriadorInput> =
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
      createMany: z
        .lazy(() => BrainstormingCreateManyCriadorInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
          z.lazy(() => BrainstormingWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingCreateNestedManyWithoutCriadorInputObjectSchema =
  Schema;
