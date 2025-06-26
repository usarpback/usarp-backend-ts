import { z } from 'zod';
import { ProjetoCreateWithoutCriadorInputObjectSchema } from './ProjetoCreateWithoutCriadorInput.schema';
import { ProjetoUncheckedCreateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedCreateWithoutCriadorInput.schema';
import { ProjetoCreateOrConnectWithoutCriadorInputObjectSchema } from './ProjetoCreateOrConnectWithoutCriadorInput.schema';
import { ProjetoCreateManyCriadorInputEnvelopeObjectSchema } from './ProjetoCreateManyCriadorInputEnvelope.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateNestedManyWithoutCriadorInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProjetoCreateWithoutCriadorInputObjectSchema),
        z.lazy(() => ProjetoCreateWithoutCriadorInputObjectSchema).array(),
        z.lazy(() => ProjetoUncheckedCreateWithoutCriadorInputObjectSchema),
        z
          .lazy(() => ProjetoUncheckedCreateWithoutCriadorInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProjetoCreateOrConnectWithoutCriadorInputObjectSchema),
        z
          .lazy(() => ProjetoCreateOrConnectWithoutCriadorInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjetoCreateManyCriadorInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProjetoCreateNestedManyWithoutCriadorInputObjectSchema = Schema;
