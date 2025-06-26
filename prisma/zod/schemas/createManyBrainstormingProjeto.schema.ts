import { z } from 'zod';
import { BrainstormingProjetoCreateManyInputObjectSchema } from './objects/BrainstormingProjetoCreateManyInput.schema';

export const BrainstormingProjetoCreateManySchema = z.object({
  data: z.union([
    BrainstormingProjetoCreateManyInputObjectSchema,
    z.array(BrainstormingProjetoCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
