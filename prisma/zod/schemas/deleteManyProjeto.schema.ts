import { z } from 'zod';
import { ProjetoWhereInputObjectSchema } from './objects/ProjetoWhereInput.schema';

export const ProjetoDeleteManySchema = z.object({
  where: ProjetoWhereInputObjectSchema.optional(),
});
