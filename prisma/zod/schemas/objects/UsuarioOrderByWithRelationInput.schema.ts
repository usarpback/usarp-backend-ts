import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProjetoOrderByRelationAggregateInputObjectSchema } from './ProjetoOrderByRelationAggregateInput.schema';
import { BrainstormingOrderByRelationAggregateInputObjectSchema } from './BrainstormingOrderByRelationAggregateInput.schema';
import { ProjetoUsuarioOrderByRelationAggregateInputObjectSchema } from './ProjetoUsuarioOrderByRelationAggregateInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    nomeCompleto: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    senha: z.lazy(() => SortOrderSchema).optional(),
    genero: z.lazy(() => SortOrderSchema).optional(),
    dataNascimento: z.lazy(() => SortOrderSchema).optional(),
    perfil: z.lazy(() => SortOrderSchema).optional(),
    organizacao: z.lazy(() => SortOrderSchema).optional(),
    tentativasLogin: z.lazy(() => SortOrderSchema).optional(),
    tentativasExclusao: z.lazy(() => SortOrderSchema).optional(),
    bloqueadoAte: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    tokenRedefinirSenha: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    expiraRedefinirSenha: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    projetosCriados: z
      .lazy(() => ProjetoOrderByRelationAggregateInputObjectSchema)
      .optional(),
    brainstormingsCriados: z
      .lazy(() => BrainstormingOrderByRelationAggregateInputObjectSchema)
      .optional(),
    participacoesProjeto: z
      .lazy(() => ProjetoUsuarioOrderByRelationAggregateInputObjectSchema)
      .optional(),
    participacoesPorEmail: z
      .lazy(() => ProjetoUsuarioOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UsuarioOrderByWithRelationInputObjectSchema = Schema;
