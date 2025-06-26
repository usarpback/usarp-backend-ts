import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioMinOrderByAggregateInput> = z
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
    bloqueadoAte: z.lazy(() => SortOrderSchema).optional(),
    tokenRedefinirSenha: z.lazy(() => SortOrderSchema).optional(),
    expiraRedefinirSenha: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UsuarioMinOrderByAggregateInputObjectSchema = Schema;
