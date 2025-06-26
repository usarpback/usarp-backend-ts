import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioCreateOrConnectWithoutMembroPorEmailInputObjectSchema =
  Schema;
