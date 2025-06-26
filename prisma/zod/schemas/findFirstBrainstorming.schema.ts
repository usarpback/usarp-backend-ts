import { z } from 'zod';
import { BrainstormingOrderByWithRelationInputObjectSchema } from './objects/BrainstormingOrderByWithRelationInput.schema';
import { BrainstormingWhereInputObjectSchema } from './objects/BrainstormingWhereInput.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';
import { BrainstormingScalarFieldEnumSchema } from './enums/BrainstormingScalarFieldEnum.schema';

export const BrainstormingFindFirstSchema = z.object({
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
  distinct: z.array(BrainstormingScalarFieldEnumSchema).optional(),
});
