import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUpdateWithoutProjetoInput.schema';
import { BrainstormingProjetoUncheckedUpdateWithoutProjetoInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => BrainstormingProjetoUpdateWithoutProjetoInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpdateWithWhereUniqueWithoutProjetoInputObjectSchema =
  Schema;
