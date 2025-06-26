import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioCreateInputObjectSchema } from './objects/ProjetoUsuarioCreateInput.schema';
import { ProjetoUsuarioUncheckedCreateInputObjectSchema } from './objects/ProjetoUsuarioUncheckedCreateInput.schema';
import { ProjetoUsuarioUpdateInputObjectSchema } from './objects/ProjetoUsuarioUpdateInput.schema';
import { ProjetoUsuarioUncheckedUpdateInputObjectSchema } from './objects/ProjetoUsuarioUncheckedUpdateInput.schema';

export const ProjetoUsuarioUpsertSchema = z.object({
  where: ProjetoUsuarioWhereUniqueInputObjectSchema,
  create: z.union([
    ProjetoUsuarioCreateInputObjectSchema,
    ProjetoUsuarioUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjetoUsuarioUpdateInputObjectSchema,
    ProjetoUsuarioUncheckedUpdateInputObjectSchema,
  ]),
});
