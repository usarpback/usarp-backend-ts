import { z } from 'zod';
import { ProjetoUsuarioCreateManyProjetoInputObjectSchema } from './ProjetoUsuarioCreateManyProjetoInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateManyProjetoInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ProjetoUsuarioCreateManyProjetoInputObjectSchema),
      z.lazy(() => ProjetoUsuarioCreateManyProjetoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ProjetoUsuarioCreateManyProjetoInputEnvelopeObjectSchema = Schema;
