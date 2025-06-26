import { z } from 'zod';
import { PapelProjetoSchema } from '../enums/PapelProjeto.schema';
import { UsuarioCreateNestedOneWithoutParticipacoesProjetoInputObjectSchema } from './UsuarioCreateNestedOneWithoutParticipacoesProjetoInput.schema';
import { UsuarioCreateNestedOneWithoutParticipacoesPorEmailInputObjectSchema } from './UsuarioCreateNestedOneWithoutParticipacoesPorEmailInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.ProjetoUsuarioCreateWithoutProjetoInput> = z
  .object({
    id: z.string().optional(),
    nomeMembro: z.string(),
    papelNoProjeto: z.lazy(() => PapelProjetoSchema),
    membro: z.lazy(
      () => UsuarioCreateNestedOneWithoutParticipacoesProjetoInputObjectSchema,
    ),
    membroPorEmail: z.lazy(
      () => UsuarioCreateNestedOneWithoutParticipacoesPorEmailInputObjectSchema,
    ),
  })
  .strict();

export const ProjetoUsuarioCreateWithoutProjetoInputObjectSchema = Schema;
