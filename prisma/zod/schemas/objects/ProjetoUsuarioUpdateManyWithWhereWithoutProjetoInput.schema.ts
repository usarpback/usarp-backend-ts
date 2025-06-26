import { z } from 'zod';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';
import { ProjetoUsuarioUpdateManyMutationInputObjectSchema } from './ProjetoUsuarioUpdateManyMutationInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutMembrosInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutMembrosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUsuarioUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateManyWithoutMembrosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateManyWithWhereWithoutProjetoInputObjectSchema =
  Schema;
