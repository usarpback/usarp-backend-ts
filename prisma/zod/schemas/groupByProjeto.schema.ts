import { z } from 'zod';
import { ProjetoWhereInputObjectSchema } from './objects/ProjetoWhereInput.schema';
import { ProjetoOrderByWithAggregationInputObjectSchema } from './objects/ProjetoOrderByWithAggregationInput.schema';
import { ProjetoScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjetoScalarWhereWithAggregatesInput.schema';
import { ProjetoScalarFieldEnumSchema } from './enums/ProjetoScalarFieldEnum.schema';

export const ProjetoGroupBySchema = z.object({
  where: ProjetoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      ProjetoOrderByWithAggregationInputObjectSchema,
      ProjetoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: ProjetoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(ProjetoScalarFieldEnumSchema),
});
