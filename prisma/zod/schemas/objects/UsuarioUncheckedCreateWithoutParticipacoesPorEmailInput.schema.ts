import { z } from 'zod';
import { GeneroSchema } from '../enums/Genero.schema';
import { PerfilSchema } from '../enums/Perfil.schema';
import { ProjetoUncheckedCreateNestedManyWithoutCriadorInputObjectSchema } from './ProjetoUncheckedCreateNestedManyWithoutCriadorInput.schema';
import { BrainstormingUncheckedCreateNestedManyWithoutCriadorInputObjectSchema } from './BrainstormingUncheckedCreateNestedManyWithoutCriadorInput.schema';
import { ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInputObjectSchema } from './ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUncheckedCreateWithoutParticipacoesPorEmailInput> =
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
        .lazy(
          () => ProjetoUncheckedCreateNestedManyWithoutCriadorInputObjectSchema,
        )
        .optional(),
      brainstormingsCriados: z
        .lazy(
          () =>
            BrainstormingUncheckedCreateNestedManyWithoutCriadorInputObjectSchema,
        )
        .optional(),
      participacoesProjeto: z
        .lazy(
          () =>
            ProjetoUsuarioUncheckedCreateNestedManyWithoutMembroInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const UsuarioUncheckedCreateWithoutParticipacoesPorEmailInputObjectSchema =
  Schema;
