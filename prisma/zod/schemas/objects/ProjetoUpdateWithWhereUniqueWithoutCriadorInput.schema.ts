import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoUpdateWithoutCriadorInputObjectSchema } from './ProjetoUpdateWithoutCriadorInput.schema';
import { ProjetoUncheckedUpdateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedUpdateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateWithWhereUniqueWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUpdateWithoutCriadorInputObjectSchema),
        z.lazy(() => ProjetoUncheckedUpdateWithoutCriadorInputObjectSchema),
      ]),
    })
    .strict();

export const ProjetoUpdateWithWhereUniqueWithoutCriadorInputObjectSchema =
  Schema;
