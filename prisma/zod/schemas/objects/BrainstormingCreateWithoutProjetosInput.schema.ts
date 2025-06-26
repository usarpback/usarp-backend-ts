import { z } from 'zod';
import { UsuarioCreateNestedOneWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateWithoutProjetosInput> = z
  .object({
    id: z.string().optional(),
    titulo: z.string(),
    projetoRelacionado: z.string(),
    data: z.string(),
    horario: z.string(),
    historiasUsuario: z.string(),
    criador: z.lazy(
      () => UsuarioCreateNestedOneWithoutBrainstormingsCriadosInputObjectSchema,
    ),
  })
  .strict();

export const BrainstormingCreateWithoutProjetosInputObjectSchema = Schema;
