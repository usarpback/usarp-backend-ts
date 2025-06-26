import { z } from 'zod';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    nomeCompleto: z.literal(true).optional(),
    email: z.literal(true).optional(),
    senha: z.literal(true).optional(),
    genero: z.literal(true).optional(),
    dataNascimento: z.literal(true).optional(),
    perfil: z.literal(true).optional(),
    organizacao: z.literal(true).optional(),
    tentativasLogin: z.literal(true).optional(),
    tentativasExclusao: z.literal(true).optional(),
    bloqueadoAte: z.literal(true).optional(),
    tokenRedefinirSenha: z.literal(true).optional(),
    expiraRedefinirSenha: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const UsuarioCountAggregateInputObjectSchema = Schema;
