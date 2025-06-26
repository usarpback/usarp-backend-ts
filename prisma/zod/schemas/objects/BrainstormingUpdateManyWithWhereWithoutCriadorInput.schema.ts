import { z } from 'zod';
import { BrainstormingScalarWhereInputObjectSchema } from './BrainstormingScalarWhereInput.schema';
import { BrainstormingUpdateManyMutationInputObjectSchema } from './BrainstormingUpdateManyMutationInput.schema';
import { BrainstormingUncheckedUpdateManyWithoutBrainstormingsCriadosInputObjectSchema } from './BrainstormingUncheckedUpdateManyWithoutBrainstormingsCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpdateManyWithWhereWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => BrainstormingScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => BrainstormingUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            BrainstormingUncheckedUpdateManyWithoutBrainstormingsCriadosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BrainstormingUpdateManyWithWhereWithoutCriadorInputObjectSchema =
  Schema;
