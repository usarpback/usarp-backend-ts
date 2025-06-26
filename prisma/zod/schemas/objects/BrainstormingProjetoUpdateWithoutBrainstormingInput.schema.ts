import { z } from 'zod';
import { ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInputObjectSchema } from './ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateWithoutBrainstormingInput> =
  z
    .object({
      projeto: z
        .lazy(
          () =>
            ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BrainstormingProjetoUpdateWithoutBrainstormingInputObjectSchema =
  Schema;
