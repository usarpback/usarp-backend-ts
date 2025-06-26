import { z } from 'zod';
import { ProjetoScalarWhereInputObjectSchema } from './ProjetoScalarWhereInput.schema';
import { ProjetoUpdateManyMutationInputObjectSchema } from './ProjetoUpdateManyMutationInput.schema';
import { ProjetoUncheckedUpdateManyWithoutProjetosCriadosInputObjectSchema } from './ProjetoUncheckedUpdateManyWithoutProjetosCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUpdateManyWithWhereWithoutCriadorInput> =
  z
    .object({
      where: z.lazy(() => ProjetoScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProjetoUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProjetoUncheckedUpdateManyWithoutProjetosCriadosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProjetoUpdateManyWithWhereWithoutCriadorInputObjectSchema = Schema;
