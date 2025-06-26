import { z } from 'zod';
import { ProjetoUsuarioOrderByWithRelationInputObjectSchema } from './objects/ProjetoUsuarioOrderByWithRelationInput.schema';
import { ProjetoUsuarioWhereInputObjectSchema } from './objects/ProjetoUsuarioWhereInput.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioCountAggregateInputObjectSchema } from './objects/ProjetoUsuarioCountAggregateInput.schema';
import { ProjetoUsuarioMinAggregateInputObjectSchema } from './objects/ProjetoUsuarioMinAggregateInput.schema';
import { ProjetoUsuarioMaxAggregateInputObjectSchema } from './objects/ProjetoUsuarioMaxAggregateInput.schema';

export const ProjetoUsuarioAggregateSchema = z.object({
  orderBy: z
    .union([
      ProjetoUsuarioOrderByWithRelationInputObjectSchema,
      ProjetoUsuarioOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: ProjetoUsuarioWhereInputObjectSchema.optional(),
  cursor: ProjetoUsuarioWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), ProjetoUsuarioCountAggregateInputObjectSchema])
    .optional(),
  _min: ProjetoUsuarioMinAggregateInputObjectSchema.optional(),
  _max: ProjetoUsuarioMaxAggregateInputObjectSchema.optional(),
});
