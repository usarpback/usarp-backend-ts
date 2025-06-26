import { z } from 'zod';
import { ProjetoOrderByWithRelationInputObjectSchema } from './objects/ProjetoOrderByWithRelationInput.schema';
import { ProjetoWhereInputObjectSchema } from './objects/ProjetoWhereInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';
import { ProjetoCountAggregateInputObjectSchema } from './objects/ProjetoCountAggregateInput.schema';
import { ProjetoMinAggregateInputObjectSchema } from './objects/ProjetoMinAggregateInput.schema';
import { ProjetoMaxAggregateInputObjectSchema } from './objects/ProjetoMaxAggregateInput.schema';

export const ProjetoAggregateSchema = z.object({
  orderBy: z
    .union([
      ProjetoOrderByWithRelationInputObjectSchema,
      ProjetoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjetoWhereInputObjectSchema.optional(),
  cursor: ProjetoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProjetoCountAggregateInputObjectSchema])
    .optional(),
  _min: ProjetoMinAggregateInputObjectSchema.optional(),
  _max: ProjetoMaxAggregateInputObjectSchema.optional(),
});
