import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';

export const BrainstormingProjetoDeleteOneSchema = z.object({
  where: BrainstormingProjetoWhereUniqueInputObjectSchema,
});
