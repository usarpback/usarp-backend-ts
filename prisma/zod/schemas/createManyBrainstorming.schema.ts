import { z } from 'zod';
import { BrainstormingCreateManyInputObjectSchema } from './objects/BrainstormingCreateManyInput.schema';

export const BrainstormingCreateManySchema = z.object({
  data: z.union([
    BrainstormingCreateManyInputObjectSchema,
    z.array(BrainstormingCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
