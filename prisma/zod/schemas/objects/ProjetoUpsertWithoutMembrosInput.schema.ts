import { z } from 'zod';
import { ProjetoUpdateWithoutMembrosInputObjectSchema } from './ProjetoUpdateWithoutMembrosInput.schema';
import { ProjetoUncheckedUpdateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedUpdateWithoutMembrosInput.schema';
import { ProjetoCreateWithoutMembrosInputObjectSchema } from './ProjetoCreateWithoutMembrosInput.schema';
import { ProjetoUncheckedCreateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedCreateWithoutMembrosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpsertWithoutMembrosInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProjetoUpdateWithoutMembrosInputObjectSchema),
      z.lazy(() => ProjetoUncheckedUpdateWithoutMembrosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProjetoCreateWithoutMembrosInputObjectSchema),
      z.lazy(() => ProjetoUncheckedCreateWithoutMembrosInputObjectSchema),
    ]),
  })
  .strict();

export const ProjetoUpsertWithoutMembrosInputObjectSchema = Schema;
