import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUpdateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutMembroInput.schema';
import { ProjetoUsuarioCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProjetoUsuarioUpdateWithoutMembroInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedUpdateWithoutMembroInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProjetoUsuarioCreateWithoutMembroInputObjectSchema),
        z.lazy(
          () => ProjetoUsuarioUncheckedCreateWithoutMembroInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroInputObjectSchema =
  Schema;
