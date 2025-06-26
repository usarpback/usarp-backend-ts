import { z } from 'zod';
import { UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioCreateOrConnectWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioCreateNestedOneWithoutBrainstormingsCriadosInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UsuarioCreateOrConnectWithoutBrainstormingsCriadosInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UsuarioCreateNestedOneWithoutBrainstormingsCriadosInputObjectSchema =
  Schema;
