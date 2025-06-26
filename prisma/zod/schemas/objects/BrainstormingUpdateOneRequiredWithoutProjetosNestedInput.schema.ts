import { z } from 'zod';
import { BrainstormingCreateWithoutProjetosInputObjectSchema } from './BrainstormingCreateWithoutProjetosInput.schema';
import { BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedCreateWithoutProjetosInput.schema';
import { BrainstormingCreateOrConnectWithoutProjetosInputObjectSchema } from './BrainstormingCreateOrConnectWithoutProjetosInput.schema';
import { BrainstormingUpsertWithoutProjetosInputObjectSchema } from './BrainstormingUpsertWithoutProjetosInput.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingUpdateWithoutProjetosInputObjectSchema } from './BrainstormingUpdateWithoutProjetosInput.schema';
import { BrainstormingUncheckedUpdateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedUpdateWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateOneRequiredWithoutProjetosNestedInput> =
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
      upsert: z
        .lazy(() => BrainstormingUpsertWithoutProjetosInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => BrainstormingWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => BrainstormingUpdateWithoutProjetosInputObjectSchema),
          z.lazy(
            () => BrainstormingUncheckedUpdateWithoutProjetosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BrainstormingUpdateOneRequiredWithoutProjetosNestedInputObjectSchema =
  Schema;
