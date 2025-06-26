import { z } from 'zod';
import { ProjetoUsuarioCreateInputObjectSchema } from './objects/ProjetoUsuarioCreateInput.schema';
import { ProjetoUsuarioUncheckedCreateInputObjectSchema } from './objects/ProjetoUsuarioUncheckedCreateInput.schema';

export const ProjetoUsuarioCreateOneSchema = z.object({
  data: z.union([
    ProjetoUsuarioCreateInputObjectSchema,
    ProjetoUsuarioUncheckedCreateInputObjectSchema,
  ]),
});
