import { z } from 'zod';
import { ProjetoCreateManyInputObjectSchema } from './objects/ProjetoCreateManyInput.schema';

export const ProjetoCreateManySchema = z.object({
  data: z.union([
    ProjetoCreateManyInputObjectSchema,
    z.array(ProjetoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
