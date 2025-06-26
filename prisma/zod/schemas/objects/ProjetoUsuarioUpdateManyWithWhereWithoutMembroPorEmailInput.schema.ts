import { z } from 'zod';
import { ProjetoUsuarioScalarWhereInputObjectSchema } from './ProjetoUsuarioScalarWhereInput.schema';
import { ProjetoUsuarioUpdateManyMutationInputObjectSchema } from './ProjetoUsuarioUpdateManyMutationInput.schema';
import { ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesPorEmailInputObjectSchema } from './ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInput> =
  z
    .object({
      where: z.lazy(() => ProjetoUsuarioScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUsuarioUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjetoUsuarioUncheckedUpdateManyWithoutParticipacoesPorEmailInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUsuarioUpdateManyWithWhereWithoutMembroPorEmailInputObjectSchema =
  Schema;
