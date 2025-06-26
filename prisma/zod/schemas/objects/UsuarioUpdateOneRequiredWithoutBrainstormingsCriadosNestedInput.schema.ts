import { z } from 'zod';
import { UsuarioCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioCreateOrConnectWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioCreateOrConnectWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUpsertWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUpsertWithoutBrainstormingsCriadosInput.schema';
import { UsuarioWhereUniqueInputObjectSchema } from './UsuarioWhereUniqueInput.schema';
import { UsuarioUpdateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUpdateWithoutBrainstormingsCriadosInput.schema';
import { UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInput> =
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
      upsert: z
        .lazy(() => UsuarioUpsertWithoutBrainstormingsCriadosInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UsuarioWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UsuarioUpdateWithoutBrainstormingsCriadosInputObjectSchema,
          ),
          z.lazy(
            () =>
              UsuarioUncheckedUpdateWithoutBrainstormingsCriadosInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UsuarioUpdateOneRequiredWithoutBrainstormingsCriadosNestedInputObjectSchema =
  Schema;
