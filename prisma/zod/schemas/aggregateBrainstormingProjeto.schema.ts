import { z } from 'zod';
import { BrainstormingProjetoOrderByWithRelationInputObjectSchema } from './objects/BrainstormingProjetoOrderByWithRelationInput.schema';
import { BrainstormingProjetoWhereInputObjectSchema } from './objects/BrainstormingProjetoWhereInput.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoCountAggregateInputObjectSchema } from './objects/BrainstormingProjetoCountAggregateInput.schema';
import { BrainstormingProjetoMinAggregateInputObjectSchema } from './objects/BrainstormingProjetoMinAggregateInput.schema';
import { BrainstormingProjetoMaxAggregateInputObjectSchema } from './objects/BrainstormingProjetoMaxAggregateInput.schema';

export const BrainstormingProjetoAggregateSchema = z.object({
  orderBy: z
    .union([
      BrainstormingProjetoOrderByWithRelationInputObjectSchema,
      BrainstormingProjetoOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BrainstormingProjetoWhereInputObjectSchema.optional(),
  cursor: BrainstormingProjetoWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      BrainstormingProjetoCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: BrainstormingProjetoMinAggregateInputObjectSchema.optional(),
  _max: BrainstormingProjetoMaxAggregateInputObjectSchema.optional(),
});
