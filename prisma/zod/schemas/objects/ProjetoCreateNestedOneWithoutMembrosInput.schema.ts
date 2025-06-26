import { z } from 'zod';
import { ProjetoCreateWithoutMembrosInputObjectSchema } from './ProjetoCreateWithoutMembrosInput.schema';
import { ProjetoUncheckedCreateWithoutMembrosInputObjectSchema } from './ProjetoUncheckedCreateWithoutMembrosInput.schema';
import { ProjetoCreateOrConnectWithoutMembrosInputObjectSchema } from './ProjetoCreateOrConnectWithoutMembrosInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateNestedOneWithoutMembrosInput> = z
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
    connect: z.lazy(() => ProjetoWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProjetoCreateNestedOneWithoutMembrosInputObjectSchema = Schema;
