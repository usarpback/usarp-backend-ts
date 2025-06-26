import { z } from 'zod';
import { ProjetoUsuarioOrderByWithRelationInputObjectSchema } from './objects/ProjetoUsuarioOrderByWithRelationInput.schema';
import { ProjetoUsuarioWhereInputObjectSchema } from './objects/ProjetoUsuarioWhereInput.schema';
import { ProjetoUsuarioWhereUniqueInputObjectSchema } from './objects/ProjetoUsuarioWhereUniqueInput.schema';
import { ProjetoUsuarioScalarFieldEnumSchema } from './enums/ProjetoUsuarioScalarFieldEnum.schema';

export const ProjetoUsuarioFindFirstSchema = z.object({
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
  distinct: z.array(ProjetoUsuarioScalarFieldEnumSchema).optional(),
});
