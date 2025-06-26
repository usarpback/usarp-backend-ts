import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInput> =
  z
    .object({
      id: z.string().optional(),
      projetoId: z.string(),
      membroId: z.string(),
      nomeMembro: z.string(),
      papelNoProjeto: z.lazy(() => PapelProjetoSchema),
    })
    .strict();

export const ProjetoUsuarioUncheckedCreateWithoutMembroPorEmailInputObjectSchema =
  Schema;
