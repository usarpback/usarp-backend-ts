import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateManyCriadorInput> = z
  .object({
    id: z.string().optional(),
    titulo: z.string(),
    projetoRelacionado: z.string(),
    data: z.string(),
    horario: z.string(),
    historiasUsuario: z.string(),
  })
  .strict();

export const BrainstormingCreateManyCriadorInputObjectSchema = Schema;
