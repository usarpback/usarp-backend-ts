import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';
import { BrainstormingProjetoCreateInputObjectSchema } from './objects/BrainstormingProjetoCreateInput.schema';
import { BrainstormingProjetoUncheckedCreateInputObjectSchema } from './objects/BrainstormingProjetoUncheckedCreateInput.schema';
import { BrainstormingProjetoUpdateInputObjectSchema } from './objects/BrainstormingProjetoUpdateInput.schema';
import { BrainstormingProjetoUncheckedUpdateInputObjectSchema } from './objects/BrainstormingProjetoUncheckedUpdateInput.schema';

export const BrainstormingProjetoUpsertSchema = z.object({
  where: BrainstormingProjetoWhereUniqueInputObjectSchema,
  create: z.union([
    BrainstormingProjetoCreateInputObjectSchema,
    BrainstormingProjetoUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    BrainstormingProjetoUpdateInputObjectSchema,
    BrainstormingProjetoUncheckedUpdateInputObjectSchema,
  ]),
});
