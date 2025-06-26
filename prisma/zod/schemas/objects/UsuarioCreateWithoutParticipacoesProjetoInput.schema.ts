import { z } from 'zod';
import { GeneroSchema } from '../enums/Genero.schema';
import { PerfilSchema } from '../enums/Perfil.schema';
import { ProjetoCreateNestedManyWithoutCriadorInputObjectSchema } from './ProjetoCreateNestedManyWithoutCriadorInput.schema';
import { BrainstormingCreateNestedManyWithoutCriadorInputObjectSchema } from './BrainstormingCreateNestedManyWithoutCriadorInput.schema';
import { ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInputObjectSchema } from './ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateWithoutParticipacoesProjetoInput> =
  z
    .object({
      id: z.string().optional(),
      nomeCompleto: z.string(),
      email: z.string(),
      senha: z.string(),
      genero: z.lazy(() => GeneroSchema),
      dataNascimento: z.string(),
      perfil: z.lazy(() => PerfilSchema),
      organizacao: z.string(),
      tentativasLogin: z.number().optional(),
      tentativasExclusao: z.number().optional(),
      bloqueadoAte: z.coerce.date().optional().nullable(),
      tokenRedefinirSenha: z.string().optional().nullable(),
      expiraRedefinirSenha: z.coerce.date().optional().nullable(),
      projetosCriados: z
        .lazy(() => ProjetoCreateNestedManyWithoutCriadorInputObjectSchema)
        .optional(),
      brainstormingsCriados: z
        .lazy(
          () => BrainstormingCreateNestedManyWithoutCriadorInputObjectSchema,
        )
        .optional(),
      participacoesPorEmail: z
        .lazy(
          () =>
            ProjetoUsuarioCreateNestedManyWithoutMembroPorEmailInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UsuarioCreateWithoutParticipacoesProjetoInputObjectSchema = Schema;
