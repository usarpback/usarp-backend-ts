import { z } from 'zod';
import { ProjetoCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedCreateWithoutBrainstormingsInput.schema';
import { ProjetoCreateOrConnectWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateOrConnectWithoutBrainstormingsInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateNestedOneWithoutBrainstormingsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoCreateWithoutBrainstormingsInputObjectSchema),
          z.lazy(
            () => ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => ProjetoCreateOrConnectWithoutBrainstormingsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => ProjetoWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const ProjetoCreateNestedOneWithoutBrainstormingsInputObjectSchema =
  Schema;
