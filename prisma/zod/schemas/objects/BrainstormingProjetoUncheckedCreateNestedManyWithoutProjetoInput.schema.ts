import { z } from 'zod';
import { BrainstormingProjetoCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateOrConnectWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateOrConnectWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateManyProjetoInputEnvelopeObjectSchema } from './BrainstormingProjetoCreateManyProjetoInputEnvelope.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInput> =
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
      createMany: z
        .lazy(
          () => BrainstormingProjetoCreateManyProjetoInputEnvelopeObjectSchema,
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

export const BrainstormingProjetoUncheckedCreateNestedManyWithoutProjetoInputObjectSchema =
  Schema;
