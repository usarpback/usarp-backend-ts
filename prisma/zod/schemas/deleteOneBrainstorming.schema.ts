import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';

export const BrainstormingDeleteOneSchema = z.object({
  where: BrainstormingWhereUniqueInputObjectSchema,
});
