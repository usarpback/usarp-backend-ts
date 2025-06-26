import { z } from 'zod';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput> =
  z
    .object({
      where: z.lazy(() => UsuarioWhereUniqueInputObjectSchema),
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

export const UsuarioCreateOrConnectWithoutBrainstormingsCriadosInputObjectSchema =
  Schema;
