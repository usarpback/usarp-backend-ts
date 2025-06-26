import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    projetoId: z.string(),
    membroId: z.string(),
    nomeMembro: z.string(),
    emailMembro: z.string(),
    papelNoProjeto: z.lazy(() => PapelProjetoSchema),
  })
  .strict();

export const ProjetoUsuarioUncheckedCreateInputObjectSchema = Schema;
