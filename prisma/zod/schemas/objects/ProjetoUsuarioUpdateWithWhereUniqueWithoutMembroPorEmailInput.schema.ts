import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUpdateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ProjetoUsuarioUpdateWithoutMembroPorEmailInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroPorEmailInputObjectSchema =
  Schema;
