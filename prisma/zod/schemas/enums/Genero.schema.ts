import { z } from 'zod';

export const GeneroSchema = z.enum([
  'FEMININO',
  'MASCULINO',
  'NAO_BINARIO',
  'PREFERE_NAO_INFORMAR',
]);
