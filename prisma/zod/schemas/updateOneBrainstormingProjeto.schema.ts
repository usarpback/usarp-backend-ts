import { z } from 'zod';
import { BrainstormingProjetoUpdateInputObjectSchema } from './objects/BrainstormingProjetoUpdateInput.schema';
import { BrainstormingProjetoUncheckedUpdateInputObjectSchema } from './objects/BrainstormingProjetoUncheckedUpdateInput.schema';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';

export const BrainstormingProjetoUpdateOneSchema = z.object({
  data: z.union([
    BrainstormingProjetoUpdateInputObjectSchema,
    BrainstormingProjetoUncheckedUpdateInputObjectSchema,
  ]),
  where: BrainstormingProjetoWhereUniqueInputObjectSchema,
});
