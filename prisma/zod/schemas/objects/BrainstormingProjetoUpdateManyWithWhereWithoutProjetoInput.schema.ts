import { z } from 'zod';
import { BrainstormingProjetoScalarWhereInputObjectSchema } from './BrainstormingProjetoScalarWhereInput.schema';
import { BrainstormingProjetoUpdateManyMutationInputObjectSchema } from './BrainstormingProjetoUpdateManyMutationInput.schema';
import { BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingsInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BrainstormingProjetoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateManyWithoutBrainstormingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpdateManyWithWhereWithoutProjetoInputObjectSchema =
  Schema;
