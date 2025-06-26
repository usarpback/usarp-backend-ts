import { z } from 'zod';
import { BrainstormingUpdateOneRequiredWithoutProjetosNestedInputObjectSchema } from './BrainstormingUpdateOneRequiredWithoutProjetosNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateWithoutProjetoInput> =
  z
    .object({
      brainstorming: z
        .lazy(
          () =>
            BrainstormingUpdateOneRequiredWithoutProjetosNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BrainstormingProjetoUpdateWithoutProjetoInputObjectSchema = Schema;
