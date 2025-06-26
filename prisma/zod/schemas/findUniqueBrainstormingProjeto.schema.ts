import { z } from 'zod';
import { BrainstormingProjetoWhereUniqueInputObjectSchema } from './objects/BrainstormingProjetoWhereUniqueInput.schema';

export const BrainstormingProjetoFindUniqueSchema = z.object({
  where: BrainstormingProjetoWhereUniqueInputObjectSchema,
});
