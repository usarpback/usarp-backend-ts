import { z } from 'zod';
import { BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoCreateOrConnectWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput.schema';
import { BrainstormingProjetoCreateManyBrainstormingInputEnvelopeObjectSchema } from './BrainstormingProjetoCreateManyBrainstormingInputEnvelope.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInput> =
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
      createMany: z
        .lazy(
          () =>
            BrainstormingProjetoCreateManyBrainstormingInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
          z
            .lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingProjetoUncheckedCreateNestedManyWithoutBrainstormingInputObjectSchema =
  Schema;
