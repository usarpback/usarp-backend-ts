import { z } from 'zod';
import { ProjetoCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedCreateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedCreateWithoutBrainstormingsInput.schema';
import { ProjetoCreateOrConnectWithoutBrainstormingsInputObjectSchema } from './ProjetoCreateOrConnectWithoutBrainstormingsInput.schema';
import { ProjetoUpsertWithoutBrainstormingsInputObjectSchema } from './ProjetoUpsertWithoutBrainstormingsInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoUpdateWithoutBrainstormingsInputObjectSchema } from './ProjetoUpdateWithoutBrainstormingsInput.schema';
import { ProjetoUncheckedUpdateWithoutBrainstormingsInputObjectSchema } from './ProjetoUncheckedUpdateWithoutBrainstormingsInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInput> =
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
      upsert: z
        .lazy(() => ProjetoUpsertWithoutBrainstormingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProjetoWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProjetoUpdateWithoutBrainstormingsInputObjectSchema),
          z.lazy(
            () => ProjetoUncheckedUpdateWithoutBrainstormingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUpdateOneRequiredWithoutBrainstormingsNestedInputObjectSchema =
  Schema;
