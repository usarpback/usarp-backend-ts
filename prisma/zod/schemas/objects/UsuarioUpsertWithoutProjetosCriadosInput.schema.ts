import { z } from 'zod';
import { UsuarioUpdateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUpdateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedUpdateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedUpdateWithoutProjetosCriadosInput.schema';
import { UsuarioCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioCreateWithoutProjetosCriadosInput.schema';
import { UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema } from './UsuarioUncheckedCreateWithoutProjetosCriadosInput.schema';

import type { Prisma } from '../../../generated/prisma';

const Schema: z.ZodType<Prisma.UsuarioUpsertWithoutProjetosCriadosInput> = z
  .object({
    update: z.union([
      z.lazy(() => UsuarioUpdateWithoutProjetosCriadosInputObjectSchema),
      z.lazy(
        () => UsuarioUncheckedUpdateWithoutProjetosCriadosInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UsuarioCreateWithoutProjetosCriadosInputObjectSchema),
      z.lazy(
        () => UsuarioUncheckedCreateWithoutProjetosCriadosInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UsuarioUpsertWithoutProjetosCriadosInputObjectSchema = Schema;
