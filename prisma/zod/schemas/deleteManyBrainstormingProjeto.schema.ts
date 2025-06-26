import { z } from 'zod';
import { BrainstormingProjetoWhereInputObjectSchema } from './objects/BrainstormingProjetoWhereInput.schema';

export const BrainstormingProjetoDeleteManySchema = z.object({
  where: BrainstormingProjetoWhereInputObjectSchema.optional(),
});
