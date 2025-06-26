import { z } from 'zod';
import { BrainstormingCreateInputObjectSchema } from './objects/BrainstormingCreateInput.schema';
import { BrainstormingUncheckedCreateInputObjectSchema } from './objects/BrainstormingUncheckedCreateInput.schema';

export const BrainstormingCreateOneSchema = z.object({
  data: z.union([
    BrainstormingCreateInputObjectSchema,
    BrainstormingUncheckedCreateInputObjectSchema,
  ]),
});
