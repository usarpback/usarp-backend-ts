import { z } from 'zod';
import { ProjetoUpdateManyMutationInputObjectSchema } from './objects/ProjetoUpdateManyMutationInput.schema';
import { ProjetoWhereInputObjectSchema } from './objects/ProjetoWhereInput.schema';

export const ProjetoUpdateManySchema = z.object({
  data: ProjetoUpdateManyMutationInputObjectSchema,
  where: ProjetoWhereInputObjectSchema.optional(),
});
