import { z } from 'zod';
import { BrainstormingProjetoScalarWhereInputObjectSchema } from './BrainstormingProjetoScalarWhereInput.schema';
import { BrainstormingProjetoUpdateManyMutationInputObjectSchema } from './BrainstormingProjetoUpdateManyMutationInput.schema';
import { BrainstormingProjetoUncheckedUpdateManyWithoutProjetosInputObjectSchema } from './BrainstormingProjetoUncheckedUpdateManyWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingProjetoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BrainstormingProjetoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingProjetoUncheckedUpdateManyWithoutProjetosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingProjetoUpdateManyWithWhereWithoutBrainstormingInputObjectSchema =
  Schema;
