import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUpdateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutProjetoInput.schema';
import { ProjetoUsuarioCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioCreateWithoutProjetoInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjetoUsuarioUpdateWithoutProjetoInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedUpdateWithoutProjetoInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProjetoUsuarioCreateWithoutProjetoInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedCreateWithoutProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpsertWithWhereUniqueWithoutProjetoInputObjectSchema =
  Schema;
