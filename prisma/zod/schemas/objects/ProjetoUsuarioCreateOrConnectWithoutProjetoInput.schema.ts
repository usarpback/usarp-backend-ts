import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateOrConnectWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioCreateOrConnectWithoutProjetoInputObjectSchema =
  Schema;
