import { z } from 'zod';
import { UsuarioUpdateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUpdateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutBrainstormingsCriadosInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UsuarioUpdateWithoutBrainstormingsCriadosInputObjectSchema,
        ),
        z.lazy(
          () =>
            UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema,
        ),
        z.lazy(
          () =>
            UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UsuarioUpsertWithoutBrainstormingsCriadosInputObjectSchema =
  Schema;
