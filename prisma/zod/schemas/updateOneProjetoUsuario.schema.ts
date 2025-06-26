import { z } from 'zod';
import { ProjetoUsuarioUpdateInputObjectSchema } from './objects/ProjetoUsuarioUpdateInput.schema';
import { ProjetoUsuarioUncheckedUpdateInputObjectSchema } from './objects/ProjetoUsuarioUncheckedUpdateInput.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';

export const ProjetoUsuarioUpdateOneSchema = z.object({
  data: z.union([
    ProjetoUsuarioUpdateInputObjectSchema,
    ProjetoUsuarioUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjetoUsuarioWhereUniqueInputObjectSchema,
});
