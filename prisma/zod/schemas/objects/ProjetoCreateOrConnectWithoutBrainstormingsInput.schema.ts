import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedCreateWithoutBrainstormingsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateOrConnectWithoutBrainstormingsInput> =
  z
    .object({
      where: z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjetoCreateWithoutBrainstormingsInputObjectSchema),
        z.lazy(
          () => ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoCreateOrConnectWithoutBrainstormingsInputObjectSchema =
  Schema;
