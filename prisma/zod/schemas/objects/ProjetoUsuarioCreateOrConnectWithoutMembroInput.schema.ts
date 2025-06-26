import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateOrConnectWithoutMembroInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioCreateOrConnectWithoutMembroInputObjectSchema =
  Schema;
