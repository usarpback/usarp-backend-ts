import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutMembroInput.schema';
import { ProjetoUsuarioCreateManyMembroInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyMembroInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateNestedManyWithoutMembroInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema),
          z
            .lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema)
            .array(),
          z.lazy(
            () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema,
          ),
          z
            .lazy(
              () => ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjetoUsuarioCreateManyMembroInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUsuarioCreateNestedManyWithoutMembroInputObjectSchema =
  Schema;
