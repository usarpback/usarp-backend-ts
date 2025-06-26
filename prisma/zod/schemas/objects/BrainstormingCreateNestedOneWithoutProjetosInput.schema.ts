import { z } from 'zod';
import { BrainstormingCreateWithoutProjetosInputObjectSchema } from './BrainstormingCreateWithoutProjetosInput.schema';
import { BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedCreateWithoutProjetosInput.schema';
import { BrainstormingCreateOrConnectWithoutProjetosInputObjectSchema } from './BrainstormingCreateOrConnectWithoutProjetosInput.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateNestedOneWithoutProjetosInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => BrainstormingCreateWithoutProjetosInputObjectSchema),
          z.lazy(
            () => BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => BrainstormingCreateOrConnectWithoutProjetosInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BrainstormingWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BrainstormingCreateNestedOneWithoutProjetosInputObjectSchema =
  Schema;
