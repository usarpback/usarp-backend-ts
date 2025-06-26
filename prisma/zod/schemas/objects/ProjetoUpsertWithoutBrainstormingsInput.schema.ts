import { z } from 'zod';
import { ProjetoUpdateWithoutBrainstormingsInputObjectSchema } from './ProjetoUpdateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedUpdateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedUpdateWithoutBrainstormingsInput.schema';
import { ProjetoCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedCreateWithoutBrainstormingsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpsertWithoutBrainstormingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjetoUpdateWithoutBrainstormingsInputObjectSchema),
      z.lazy(
        () => ProjetoUncheckedUpdateWithoutBrainstormingsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => ProjetoCreateWithoutBrainstormingsInputObjectSchema),
      z.lazy(
        () => ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const ProjetoUpsertWithoutBrainstormingsInputObjectSchema = Schema;
