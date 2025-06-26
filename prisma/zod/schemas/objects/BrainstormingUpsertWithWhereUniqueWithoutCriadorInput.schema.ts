import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingUpdateWithoutCriadorInputObjectSchema } from './BrainstormingUpdateWithoutCriadorInput.schema';
import { BrainstormingUncheckedUpdateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedUpdateWithoutCriadorInput.schema';
import { BrainstormingCreateWithoutCriadorInputObjectSchema } from './BrainstormingCreateWithoutCriadorInput.schema';
import { BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedCreateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpsertWithWhereUniqueWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BrainstormingUpdateWithoutCriadorInputObjectSchema),
        z.lazy(
          () => BrainstormingUncheckedUpdateWithoutCriadorInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BrainstormingCreateWithoutCriadorInputObjectSchema),
        z.lazy(
          () => BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingUpsertWithWhereUniqueWithoutCriadorInputObjectSchema =
  Schema;
