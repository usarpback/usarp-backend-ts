import { z } from 'zod';
import { BrainstormingProjetoCreateInputObjectSchema } from './objects/BrainstormingProjetoCreateInput.schema';
import { BrainstormingProjetoUncheckedCreateInputObjectSchema } from './objects/BrainstormingProjetoUncheckedCreateInput.schema';

export const BrainstormingProjetoCreateOneSchema = z.object({
  data: z.union([
    BrainstormingProjetoCreateInputObjectSchema,
    BrainstormingProjetoUncheckedCreateInputObjectSchema,
  ]),
});
