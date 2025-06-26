import { z } from 'zod';
import { ProjetoUsuarioCreateManyMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateManyMembroPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateManyMembroPorEmailInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProjetoUsuarioCreateManyMembroPorEmailInputObjectSchema),
        z
          .lazy(() => ProjetoUsuarioCreateManyMembroPorEmailInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProjetoUsuarioCreateManyMembroPorEmailInputEnvelopeObjectSchema =
  Schema;
