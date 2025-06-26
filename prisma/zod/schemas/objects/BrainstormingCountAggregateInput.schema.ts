import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    criadorId: z.literal(true).optional(),
    titulo: z.literal(true).optional(),
    projetoRelacionado: z.literal(true).optional(),
    data: z.literal(true).optional(),
    horario: z.literal(true).optional(),
    historiasUsuario: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BrainstormingCountAggregateInputObjectSchema = Schema;
