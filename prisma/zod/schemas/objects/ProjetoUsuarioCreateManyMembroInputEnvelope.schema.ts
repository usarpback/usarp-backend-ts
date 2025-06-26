import { z } from 'zod';
import { ProjetoUsuarioCreateManyMembroInputObjectSchema } from './ProjetoUsuarioCreateManyMembroInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateManyMembroInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProjetoUsuarioCreateManyMembroInputObjectSchema),
      z.lazy(() => ProjetoUsuarioCreateManyMembroInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjetoUsuarioCreateManyMembroInputEnvelopeObjectSchema = Schema;
