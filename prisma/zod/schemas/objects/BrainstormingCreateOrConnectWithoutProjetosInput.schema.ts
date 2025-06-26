import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './BrainstormingWhereUniqueInput.schema';
import { BrainstormingCreateWithoutProjetosInputObjectSchema } from './BrainstormingCreateWithoutProjetosInput.schema';
import { BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedCreateWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateOrConnectWithoutProjetosInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BrainstormingCreateWithoutProjetosInputObjectSchema),
        z.lazy(
          () => BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingCreateOrConnectWithoutProjetosInputObjectSchema =
  Schema;
