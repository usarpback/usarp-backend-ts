import { z } from 'zod';
import { ProjetoUpdateInputObjectSchema } from './objects/ProjetoUpdateInput.schema';
import { ProjetoUncheckedUpdateInputObjectSchema } from './objects/ProjetoUncheckedUpdateInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';

export const ProjetoUpdateOneSchema = z.object({
  data: z.union([
    ProjetoUpdateInputObjectSchema,
    ProjetoUncheckedUpdateInputObjectSchema,
  ]),
  where: ProjetoWhereUniqueInputObjectSchema,
});
