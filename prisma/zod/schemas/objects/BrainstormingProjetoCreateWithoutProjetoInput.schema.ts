import { z } from 'zod';
import { BrainstormingCreateNestedOneWithoutProjetosInputObjectSchema } from './BrainstormingCreateNestedOneWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateWithoutProjetoInput> =
  z
    .object({
      brainstorming: z.lazy(
        () => BrainstormingCreateNestedOneWithoutProjetosInputObjectSchema,
      ),
    })
    .strict();

export const BrainstormingProjetoCreateWithoutProjetoInputObjectSchema = Schema;
