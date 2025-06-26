import { z } from 'zod';
import { ProjetoCreateNestedOneWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateNestedOneWithoutBrainstormingsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingProjetoCreateWithoutBrainstormingInput> =
  z
    .object({
      projeto: z.lazy(
        () => ProjetoCreateNestedOneWithoutBrainstormingsInputObjectSchema,
      ),
    })
    .strict();

export const BrainstormingProjetoCreateWithoutBrainstormingInputObjectSchema =
  Schema;
