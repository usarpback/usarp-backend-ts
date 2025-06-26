import { z } from 'zod';
import { ProjetoUsuarioWhereInputObjectSchema } from './objects/ProjetoUsuarioWhereInput.schema';
import { ProjetoUsuarioOrderByWithAggregationInputObjectSchema } from './objects/ProjetoUsuarioOrderByWithAggregationInput.schema';
import { ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjetoUsuarioScalarWhereWithAggregatesInput.schema';
import { ProjetoUsuarioScalarFieldEnumSchema } from './enums/ProjetoUsuarioScalarFieldEnum.schema';

export const ProjetoUsuarioGroupBySchema = z.object({
  where: ProjetoUsuarioWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProjetoUsuarioOrderByWithAggregationInputObjectSchema,
      ProjetoUsuarioOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProjetoUsuarioScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjetoUsuarioScalarFieldEnumSchema),
});
