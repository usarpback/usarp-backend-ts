import { z } from 'zod';
import { ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInputObjectSchema } from './ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput.schema';
import { BrainstormingUpdateOneRequiredWithoutProjetosNestedInputObjectSchema } from './BrainstormingUpdateOneRequiredWithoutProjetosNestedInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoUpdateInput> = z
  .object({
    projeto: z
      .lazy(
        () =>
          ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInputObjectSchema,
      )
      .optional(),
    brainstorming: z
      .lazy(
        () =>
          BrainstormingUpdateOneRequiredWithoutProjetosNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingProjetoUpdateInputObjectSchema = Schema;
