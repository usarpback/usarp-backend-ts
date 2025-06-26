import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateWithoutBrainstormingInput.schema';
import { BrainstormingProjetoUncheckedCreateWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoUncheckedCreateWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateOrConnectWithoutBrainstormingInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoWhereUniqueInputObjectSchema),
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

export const BrainstormingProjetoCreateOrConnectWithoutBrainstormingInputObjectSchema =
  Schema;
