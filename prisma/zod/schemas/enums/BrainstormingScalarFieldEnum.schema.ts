import { z } from 'zod';

export const BrainstormingScalarFieldEnumSchema = z.enum([
  'id',
  'criadorId',
  'titulo',
  'projetoRelacionado',
  'data',
  'horario',
  'historiasUsuario',
]);
