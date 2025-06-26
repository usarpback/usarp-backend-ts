import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingCreateWithoutCriadorInputObjectSchema } from './BrainstormingCreateWithoutCriadorInput.schema';
import { BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedCreateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateOrConnectWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BrainstormingCreateWithoutCriadorInputObjectSchema),
        z.lazy(
          () => BrainstormingUncheckedCreateWithoutCriadorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingCreateOrConnectWithoutCriadorInputObjectSchema =
  Schema;
