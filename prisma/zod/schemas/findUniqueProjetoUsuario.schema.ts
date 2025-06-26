import { z } from 'zod';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';

export const ProjetoUsuarioFindUniqueSchema = z.object({
  where: ProjetoUsuarioWhereUniqueInputObjectSchema,
});
