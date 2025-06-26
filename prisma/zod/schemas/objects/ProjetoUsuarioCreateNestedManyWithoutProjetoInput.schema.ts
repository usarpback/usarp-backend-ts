import { z } from 'zod';
import { ProjetoUsuarioCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateOrConnectWithoutProjetoInput.schema';
import { ProjetoUsuarioCreateManyProjetoInputEnvelopeObjectSchema } from './ProjetoUsuarioCreateManyProjetoInputEnvelope.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateNestedManyWithoutProjetoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema),
          z
            .lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema)
            .array(),
          z.lazy(
            () => ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProjetoUsuarioCreateManyProjetoInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
          z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProjetoUsuarioCreateNestedManyWithoutProjetoInputObjectSchema =
  Schema;
