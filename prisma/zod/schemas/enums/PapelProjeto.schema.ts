import { z } from 'zod';

export const PapelProjetoSchema = z.enum(['MODERADOR', 'PARTICIPANTE']);
