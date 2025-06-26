import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';

export const ProjetoFindUniqueSchema = z.object({
  where: ProjetoWhereUniqueInputObjectSchema,
});
