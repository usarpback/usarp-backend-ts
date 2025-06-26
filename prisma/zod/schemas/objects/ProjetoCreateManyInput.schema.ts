import { z } from 'zod';
import { StatusProjetoSchema } from '../enums/StatusProjeto.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoCreateManyInput> = z
  .object({
    id: z.string().optional(),
    nomeProjeto: z.string(),
    descricao: z.string().optional().nullable(),
    criadorId: z.string(),
    status: z.lazy(() => StatusProjetoSchema).optional(),
  })
  .strict();

export const ProjetoCreateManyInputObjectSchema = Schema;
