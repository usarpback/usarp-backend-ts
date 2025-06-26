import { z } from 'zod';
import { ProjetoCreateInputObjectSchema } from './objects/ProjetoCreateInput.schema';
import { ProjetoUncheckedCreateInputObjectSchema } from './objects/ProjetoUncheckedCreateInput.schema';

export const ProjetoCreateOneSchema = z.object({
  data: z.union([
    ProjetoCreateInputObjectSchema,
    ProjetoUncheckedCreateInputObjectSchema,
  ]),
});
