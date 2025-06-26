import { z } from 'zod';
import { BrainstormingWhereInputObjectSchema } from './objects/BrainstormingWhereInput.schema';
import { BrainstormingOrderByWithAggregationInputObjectSchema } from './objects/BrainstormingOrderByWithAggregationInput.schema';
import { BrainstormingScalarWhereWithAggregatesInputObjectSchema } from './objects/BrainstormingScalarWhereWithAggregatesInput.schema';
import { BrainstormingScalarFieldEnumSchema } from './enums/BrainstormingScalarFieldEnum.schema';

export const BrainstormingGroupBySchema = z.object({
  where: BrainstormingWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BrainstormingOrderByWithAggregationInputObjectSchema,
      BrainstormingOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: BrainstormingScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BrainstormingScalarFieldEnumSchema),
});
