import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUpdateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutMembroInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUsuarioUpdateWithoutMembroInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedUpdateWithoutMembroInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateWithWhereUniqueWithoutMembroInputObjectSchema =
  Schema;
