import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoCreateWithoutCriadorInputObjectSchema } from './ProjetoCreateWithoutCriadorInput.schema';
import { ProjetoUncheckedCreateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedCreateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateOrConnectWithoutCriadorInput> = z
  .object({
    where: z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProjetoCreateWithoutCriadorInputObjectSchema),
      z.lazy(() => ProjetoUncheckedCreateWithoutCriadorInputObjectSchema),
    ]),
  })
  .strict();

export const ProjetoCreateOrConnectWithoutCriadorInputObjectSchema = Schema;
