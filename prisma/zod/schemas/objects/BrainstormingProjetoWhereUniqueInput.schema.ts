import { z } from 'zod';
import { BrainstormingProjetoProjetoIdBrainstormingIdCompoundUniqueInputObjectSchema } from './BrainstormingProjetoProjetoIdBrainstormingIdCompoundUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoWhereUniqueInput> = z
  .object({
    projetoId_brainstormingId: z
      .lazy(
        () =>
          BrainstormingProjetoProjetoIdBrainstormingIdCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingProjetoWhereUniqueInputObjectSchema = Schema;
