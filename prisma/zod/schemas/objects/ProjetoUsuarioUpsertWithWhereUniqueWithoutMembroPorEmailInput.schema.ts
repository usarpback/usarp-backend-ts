import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioUpdateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUpdateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateWithoutMembroPorEmailInput.schema';
import { ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => ProjetoUsuarioUpdateWithoutMembroPorEmailInputObjectSchema,
        ),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateWithoutMembroPorEmailInputObjectSchema,
        ),
      ]),
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

export const ProjetoUsuarioUpsertWithWhereUniqueWithoutMembroPorEmailInputObjectSchema =
  Schema;
