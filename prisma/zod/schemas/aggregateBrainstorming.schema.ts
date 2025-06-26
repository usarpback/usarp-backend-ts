import { z } from 'zod';
import { BrainstormingOrderByWithRelationInputObjectSchema } from './objects/BrainstormingOrderByWithRelationInput.schema';
import { BrainstormingWhereInputObjectSchema } from './objects/BrainstormingWhereInput.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';
import { BrainstormingCountAggregateInputObjectSchema } from './objects/BrainstormingCountAggregateInput.schema';
import { BrainstormingMinAggregateInputObjectSchema } from './objects/BrainstormingMinAggregateInput.schema';
import { BrainstormingMaxAggregateInputObjectSchema } from './objects/BrainstormingMaxAggregateInput.schema';

export const BrainstormingAggregateSchema = z.object({
  orderBy: z
    .union([
      BrainstormingOrderByWithRelationInputObjectSchema,
      BrainstormingOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BrainstormingWhereInputObjectSchema.optional(),
  cursor: BrainstormingWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), BrainstormingCountAggregateInputObjectSchema])
    .optional(),
  _min: BrainstormingMinAggregateInputObjectSchema.optional(),
  _max: BrainstormingMaxAggregateInputObjectSchema.optional(),
});
