import { z } from 'zod';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';
import { ProjetoCreateInputObjectSchema } from './objects/ProjetoCreateInput.schema';
import { ProjetoUncheckedCreateInputObjectSchema } from './objects/ProjetoUncheckedCreateInput.schema';
import { ProjetoUpdateInputObjectSchema } from './objects/ProjetoUpdateInput.schema';
import { ProjetoUncheckedUpdateInputObjectSchema } from './objects/ProjetoUncheckedUpdateInput.schema';

export const ProjetoUpsertSchema = z.object({
  where: ProjetoWhereUniqueInputObjectSchema,
  create: z.union([
    ProjetoCreateInputObjectSchema,
    ProjetoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    ProjetoUpdateInputObjectSchema,
    ProjetoUncheckedUpdateInputObjectSchema,
  ]),
});
