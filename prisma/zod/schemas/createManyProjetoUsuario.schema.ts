import { z } from 'zod';
import { ProjetoUsuarioCreateManyInputObjectSchema } from './objects/ProjetoUsuarioCreateManyInput.schema';

export const ProjetoUsuarioCreateManySchema = z.object({
  data: z.union([
    ProjetoUsuarioCreateManyInputObjectSchema,
    z.array(ProjetoUsuarioCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
