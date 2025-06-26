import { z } from 'zod';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';
import { ProjetoUsuarioUpdateManyMutationInputObjectSchema } from './ProjetoUsuarioUpdateManyMutationInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesProjetoInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateManyWithWhereWithoutMembroInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUsuarioUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesProjetoInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateManyWithWhereWithoutMembroInputObjectSchema =
  Schema;
