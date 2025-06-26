import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';

export const BrainstormingFindUniqueSchema = z.object({
  where: BrainstormingWhereUniqueInputObjectSchema,
});
