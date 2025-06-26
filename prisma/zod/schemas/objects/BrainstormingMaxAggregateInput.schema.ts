import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    criadorId: z.literal(true).optional(),
    titulo: z.literal(true).optional(),
    projetoRelacionado: z.literal(true).optional(),
    data: z.literal(true).optional(),
    horario: z.literal(true).optional(),
    historiasUsuario: z.literal(true).optional(),
  })
  .strict();

export const BrainstormingMaxAggregateInputObjectSchema = Schema;
