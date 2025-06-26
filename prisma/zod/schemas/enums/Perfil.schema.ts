import { z } from 'zod';

export const PerfilSchema = z.enum([
  'ESTUDANTE_GRADUACAO',
  'ESTUDANTE_POS_GRADUACAO',
  'PROFESSOR',
  'PROFISSIONAL_INDUSTRIA',
]);
