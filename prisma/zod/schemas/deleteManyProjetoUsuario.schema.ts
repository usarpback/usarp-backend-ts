import { z } from 'zod';
import { ProjetoUsuarioWhereInputObjectSchema } from './objects/ProjetoUsuarioWhereInput.schema';

export const ProjetoUsuarioDeleteManySchema = z.object({
  where: ProjetoUsuarioWhereInputObjectSchema.optional(),
});
