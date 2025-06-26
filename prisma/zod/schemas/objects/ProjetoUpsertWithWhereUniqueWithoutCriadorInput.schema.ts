import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoUpdateWithoutCriadorInputObjectSchema } from './ProjetoUpdateWithoutCriadorInput.schema';
import { ProjetoUncheckedUpdateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedUpdateWithoutCriadorInput.schema';
import { ProjetoCreateWithoutCriadorInputObjectSchema } from './ProjetoCreateWithoutCriadorInput.schema';
import { ProjetoUncheckedCreateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedCreateWithoutCriadorInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpsertWithWhereUniqueWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjetoUpdateWithoutCriadorInputObjectSchema),
        z.lazy(() => ProjetoUncheckedUpdateWithoutCriadorInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProjetoCreateWithoutCriadorInputObjectSchema),
        z.lazy(() => ProjetoUncheckedCreateWithoutCriadorInputObjectSchema),
      ]),
    })
    .strict();

export const ProjetoUpsertWithWhereUniqueWithoutCriadorInputObjectSchema =
  Schema;
