import { z } from 'zod';
import { ProjetoOrderByWithRelationInputObjectSchema } from './objects/ProjetoOrderByWithRelationInput.schema';
import { ProjetoWhereInputObjectSchema } from './objects/ProjetoWhereInput.schema';
import { ProjetoWhereUniqueInputObjectSchema } from './objects/ProjetoWhereUniqueInput.schema';
import { ProjetoScalarFieldEnumSchema } from './enums/ProjetoScalarFieldEnum.schema';

export const ProjetoFindFirstSchema = z.object({
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
  distinct: z.array(ProjetoScalarFieldEnumSchema).optional(),
});
