import { z } from 'zod';

export const StatusProjetoSchema = z.enum(['NOVO', 'DELETADO', 'ANTIGO']);
