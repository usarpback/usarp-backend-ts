import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';

export const ProjetoDeleteOneSchema = z.object({
  where: ProjetoWhereUniqueInputObjectSchema,
});
