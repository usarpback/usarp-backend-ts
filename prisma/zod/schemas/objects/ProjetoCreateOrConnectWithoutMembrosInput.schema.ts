import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoCreateWithoutMembrosInputObjectSchema } from './ProjetoCreateWithoutMembrosInput.schema';
import { ProjetoUncheckedCreateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedCreateWithoutMembrosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateOrConnectWithoutMembrosInput> = z
  .object({
    where: z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjetoCreateWithoutMembrosInputObjectSchema),
      z.lazy(() => ProjetoUncheckedCreateWithoutMembrosInputObjectSchema),
    ]),
  })
  .strict();

export const ProjetoCreateOrConnectWithoutMembrosInputObjectSchema = Schema;
