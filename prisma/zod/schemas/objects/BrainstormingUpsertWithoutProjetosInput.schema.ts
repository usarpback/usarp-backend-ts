import { z } from 'zod';
import { BrainstormingUpdateWithoutProjetosInputObjectSchema } from './BrainstormingUpdateWithoutProjetosInput.schema';
import { BrainstormingUncheckedUpdateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedUpdateWithoutProjetosInput.schema';
import { BrainstormingCreateWithoutProjetosInputObjectSchema } from './BrainstormingCreateWithoutProjetosInput.schema';
import { BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema } from './BrainstormingUncheckedCreateWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingUpsertWithoutProjetosInput> = z
  .object({
    update: z.union([
      z.lazy(() => BrainstormingUpdateWithoutProjetosInputObjectSchema),
      z.lazy(
        () => BrainstormingUncheckedUpdateWithoutProjetosInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => BrainstormingCreateWithoutProjetosInputObjectSchema),
      z.lazy(
        () => BrainstormingUncheckedCreateWithoutProjetosInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BrainstormingUpsertWithoutProjetosInputObjectSchema = Schema;
