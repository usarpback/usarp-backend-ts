import { z } from 'zod';
import { ProjetoCreateWithoutCriadorInputObjectSchema } from './ProjetoCreateWithoutCriadorInput.schema';
import { ProjetoUncheckedCreateWithoutCriadorInputObjectSchema } from './ProjetoUncheckedCreateWithoutCriadorInput.schema';
import { ProjetoCreateOrConnectWithoutCriadorInputObjectSchema } from './ProjetoCreateOrConnectWithoutCriadorInput.schema';
import { ProjetoUpsertWithWhereUniqueWithoutCriadorInputObjectSchema } from './ProjetoUpsertWithWhereUniqueWithoutCriadorInput.schema';
import { ProjetoCreateManyCriadorInputEnvelopeObjectSchema } from './ProjetoCreateManyCriadorInputEnvelope.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './ProjetoWhereUniqueInput.schema';
import { ProjetoUpdateWithWhereUniqueWithoutCriadorInputObjectSchema } from './ProjetoUpdateWithWhereUniqueWithoutCriadorInput.schema';
import { ProjetoUpdateManyWithWhereWithoutCriadorInputObjectSchema } from './ProjetoUpdateManyWithWhereWithoutCriadorInput.schema';
import { ProjetoScalarWhereInputObjectSchema } from './ProjetoScalarWhereInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateManyWithoutCriadorNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => ProjetoUpsertWithWhereUniqueWithoutCriadorInputObjectSchema,
        ),
        z
          .lazy(
            () => ProjetoUpsertWithWhereUniqueWithoutCriadorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ProjetoCreateManyCriadorInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema),
        z.lazy(() => ProjetoWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ProjetoUpdateWithWhereUniqueWithoutCriadorInputObjectSchema,
        ),
        z
          .lazy(
            () => ProjetoUpdateWithWhereUniqueWithoutCriadorInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProjetoUpdateManyWithWhereWithoutCriadorInputObjectSchema),
        z
          .lazy(() => ProjetoUpdateManyWithWhereWithoutCriadorInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProjetoScalarWhereInputObjectSchema),
        z.lazy(() => ProjetoScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProjetoUpdateManyWithoutCriadorNestedInputObjectSchema = Schema;
