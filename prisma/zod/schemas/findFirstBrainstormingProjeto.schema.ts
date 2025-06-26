import { z } from 'zod';
import { BrainstormingProjetoOrderByWithRelationInputObjectSchema } from './objects/BrainstormingProjetoOrderByWithRelationInput.schema';
import { BrainstormingProjetoWhereInputObjectSchema } from './objects/BrainstormingProjetoWhereInput.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoScalarFieldEnumSchema } from './enums/BrainstormingProjetoScalarFieldEnum.schema';

export const BrainstormingProjetoFindFirstSchema = z.object({
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
  distinct: z.array(BrainstormingProjetoScalarFieldEnumSchema).optional(),
});
