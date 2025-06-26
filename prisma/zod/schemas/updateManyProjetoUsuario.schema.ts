import { z } from 'zod';
import { ProjetoUsuarioUpdateManyMutationInputObjectSchema } from './objects/ProjetoUsuarioUpdateManyMutationInput.schema';
import { ProjetoUsuarioWhereInputObjectSchema } from './objects/ProjetoUsuarioWhereInput.schema';

export const ProjetoUsuarioUpdateManySchema = z.object({
  data: ProjetoUsuarioUpdateManyMutationInputObjectSchema,
  where: ProjetoUsuarioWhereInputObjectSchema.optional(),
});
