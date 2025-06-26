import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUpdateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => BrainstormingProjetoUpdateWithoutBrainstormingInputObjectSchema,
        ),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpdateWithWhereUniqueWithoutBrainstormingInputObjectSchema =
  Schema;
