import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateOrConnectWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => BrainstormingProjetoCreateWithoutProjetoInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoCreateOrConnectWithoutProjetoInputObjectSchema =
  Schema;
