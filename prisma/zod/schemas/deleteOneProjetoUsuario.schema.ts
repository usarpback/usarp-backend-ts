import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';

export const ProjetoUsuarioDeleteOneSchema = z.object({
  where: ProjetoUsuarioWhereUniqueInputObjectSchema,
});
