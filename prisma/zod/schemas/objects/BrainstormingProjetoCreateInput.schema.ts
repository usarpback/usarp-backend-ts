import { z } from 'zod';
import { ProjetoCreateNestedOneWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateNestedOneWithoutBrainstormingsInput.schema';
import { BrainstormingCreateNestedOneWithoutProjetosInputObjectSchema } from './BrainstormingCreateNestedOneWithoutProjetosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateInput> = z
  .object({
    projeto: z.lazy(
      () => ProjetoCreateNestedOneWithoutBrainstormingsInputObjectSchema,
    ),
    brainstorming: z.lazy(
      () => BrainstormingCreateNestedOneWithoutProjetosInputObjectSchema,
    ),
  })
  .strict();

export const BrainstormingProjetoCreateInputObjectSchema = Schema;
