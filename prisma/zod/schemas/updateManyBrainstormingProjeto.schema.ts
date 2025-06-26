import { z } from 'zod';
import { BrainstormingProjetoUpdateManyMutationInputObjectSchema } from './objects/BrainstormingProjetoUpdateManyMutationInput.schema';
import { BrainstormingProjetoWhereInputObjectSchema } from './objects/BrainstormingProjetoWhereInput.schema';

export const BrainstormingProjetoUpdateManySchema = z.object({
  data: BrainstormingProjetoUpdateManyMutationInputObjectSchema,
  where: BrainstormingProjetoWhereInputObjectSchema.optional(),
});
