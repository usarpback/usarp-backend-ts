import { z } from 'zod';
import { UsuarioCreateNestedOneWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput.schema';
import { BrainstormingProjetoCreateNestedManyWithoutBrainstormingInputObjectSchema } from './BrainstormingProjetoCreateNestedManyWithoutBrainstormingInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.BrainstormingCreateInput> = z
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
    projetos: z
      .lazy(
        () =>
          BrainstormingProjetoCreateNestedManyWithoutBrainstormingInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const BrainstormingCreateInputObjectSchema = Schema;
