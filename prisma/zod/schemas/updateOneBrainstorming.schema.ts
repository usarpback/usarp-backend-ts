import { z } from 'zod';
import { BrainstormingUpdateInputObjectSchema } from './objects/BrainstormingUpdateInput.schema';
import { BrainstormingUncheckedUpdateInputObjectSchema } from './objects/BrainstormingUncheckedUpdateInput.schema';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';

export const BrainstormingUpdateOneSchema = z.object({
  data: z.union([
    BrainstormingUpdateInputObjectSchema,
    BrainstormingUncheckedUpdateInputObjectSchema,
  ]),
  where: BrainstormingWhereUniqueInputObjectSchema,
});
