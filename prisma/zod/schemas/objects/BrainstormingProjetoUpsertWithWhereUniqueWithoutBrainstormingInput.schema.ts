import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoUpdateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUpdateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => BrainstormingProjetoUpdateWithoutBrainstormingInputObjectSchema,
        ),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateWithoutBrainstormingInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema,
        ),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpsertWithWhereUniqueWithoutBrainstormingInputObjectSchema =
  Schema;
