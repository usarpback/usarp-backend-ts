import { z } from 'zod';
import { ProjetoCreateWithoutMembrosInputObjectSchema } from './ProjetoCreateWithoutMembrosInput.schema';
import { ProjetoUncheckedCreateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedCreateWithoutMembrosInput.schema';
import { ProjetoCreateOrConnectWithoutMembrosInputObjectSchema } from './ProjetoCreateOrConnectWithoutMembrosInput.schema';
import { ProjetoUpsertWithoutMembrosInputObjectSchema } from './ProjetoUpsertWithoutMembrosInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoUpdateWithoutMembrosInputObjectSchema } from './ProjetoUpdateWithoutMembrosInput.schema';
import { ProjetoUncheckedUpdateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedUpdateWithoutMembrosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateOneRequiredWithoutMembrosNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoCreateWithoutMembrosInputObjectSchema),
          z.lazy(() => ProjetoUncheckedCreateWithoutMembrosInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProjetoCreateOrConnectWithoutMembrosInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProjetoUpsertWithoutMembrosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProjetoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProjetoUpdateWithoutMembrosInputObjectSchema),
          z.lazy(() => ProjetoUncheckedUpdateWithoutMembrosInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUpdateOneRequiredWithoutMembrosNestedInputObjectSchema =
  Schema;
