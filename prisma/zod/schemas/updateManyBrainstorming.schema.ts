import { z } from 'zod';
import { BrainstormingUpdateManyMutationInputObjectSchema } from './objects/BrainstormingUpdateManyMutationInput.schema';
import { BrainstormingWhereInputObjectSchema } from './objects/BrainstormingWhereInput.schema';

export const BrainstormingUpdateManySchema = z.object({
  data: BrainstormingUpdateManyMutationInputObjectSchema,
  where: BrainstormingWhereInputObjectSchema.optional(),
});
