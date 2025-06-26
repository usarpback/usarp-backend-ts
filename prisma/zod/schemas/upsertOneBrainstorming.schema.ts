import { z } from 'zod';
import { BrainstormingWhereUniqueInputObjectSchema } from './objects/BrainstormingWhereUniqueInput.schema';
import { BrainstormingCreateInputObjectSchema } from './objects/BrainstormingCreateInput.schema';
import { BrainstormingUncheckedCreateInputObjectSchema } from './objects/BrainstormingUncheckedCreateInput.schema';
import { BrainstormingUpdateInputObjectSchema } from './objects/BrainstormingUpdateInput.schema';
import { BrainstormingUncheckedUpdateInputObjectSchema } from './objects/BrainstormingUncheckedUpdateInput.schema';

export const BrainstormingUpsertSchema = z.object({
  where: BrainstormingWhereUniqueInputObjectSchema,
  create: z.union([
    BrainstormingCreateInputObjectSchema,
    BrainstormingUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BrainstormingUpdateInputObjectSchema,
    BrainstormingUncheckedUpdateInputObjectSchema,
  ]),
});
