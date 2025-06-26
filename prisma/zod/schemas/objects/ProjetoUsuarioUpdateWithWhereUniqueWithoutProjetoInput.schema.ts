import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUpdateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUsuarioUpdateWithoutProjetoInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedUpdateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateWithWhereUniqueWithoutProjetoInputObjectSchema =
  Schema;
