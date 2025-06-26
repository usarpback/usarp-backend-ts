import { z } from 'zod';
import { BrainstormingProjetoWhereInputObjectSchema } from './objects/BrainstormingProjetoWhereInput.schema';
import { BrainstormingProjetoOrderByWithAggregationInputObjectSchema } from './objects/BrainstormingProjetoOrderByWithAggregationInput.schema';
import { BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema } from './objects/BrainstormingProjetoScalarWhereWithAggregatesInput.schema';
import { BrainstormingProjetoScalarFieldEnumSchema } from './enums/BrainstormingProjetoScalarFieldEnum.schema';

export const BrainstormingProjetoGroupBySchema = z.object({
  where: BrainstormingProjetoWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      BrainstormingProjetoOrderByWithAggregationInputObjectSchema,
      BrainstormingProjetoOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    BrainstormingProjetoScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BrainstormingProjetoScalarFieldEnumSchema),
});
