import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjetoOrderByWithRelationInputObjectSchema } from './ProjetoOrderByWithRelationInput.schema';
import { UsuarioOrderByWithRelationInputObjectSchema } from './UsuarioOrderByWithRelationInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    projetoId: z.lazy(() => SortOrderSchema).optional(),
    membroId: z.lazy(() => SortOrderSchema).optional(),
    nomeMembro: z.lazy(() => SortOrderSchema).optional(),
    emailMembro: z.lazy(() => SortOrderSchema).optional(),
    papelNoProjeto: z.lazy(() => SortOrderSchema).optional(),
    projeto: z
      .lazy(() => ProjetoOrderByWithRelationInputObjectSchema)
      .optional(),
    membro: z
      .lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
      .optional(),
    membroPorEmail: z
      .lazy(() => UsuarioOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProjetoUsuarioOrderByWithRelationInputObjectSchema = Schema;
