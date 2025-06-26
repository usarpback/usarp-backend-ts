import { z } from 'zod';
import { BrainstormingWhereInputObjectSchema } from './objects/BrainstormingWhereInput.schema';

export const BrainstormingDeleteManySchema = z.object({
  where: BrainstormingWhereInputObjectSchema.optional(),
});
