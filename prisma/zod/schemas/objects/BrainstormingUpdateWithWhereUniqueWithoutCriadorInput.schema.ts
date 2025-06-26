import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingUpdateWithoutCriadorInputObjectSchema } from './BrainstormingUpdateWithoutCriadorInput.schema';
import { BrainstormingUncheckedUpdateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedUpdateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateWithWhereUniqueWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BrainstormingUpdateWithoutCriadorInputObjectSchema),
        z.lazy(
          () => BrainstormingUncheckedUpdateWithoutCriadorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingUpdateWithWhereUniqueWithoutCriadorInputObjectSchema =
  Schema;
