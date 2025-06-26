import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUpdateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedUpdateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateWithoutProjetoInput.schema';
import { BrainstormingProjetoCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoCreateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => BrainstormingProjetoUpdateWithoutProjetoInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateWithoutProjetoInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => BrainstormingProjetoCreateWithoutProjetoInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedCreateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpsertWithWhereUniqueWithoutProjetoInputObjectSchema =
  Schema;
