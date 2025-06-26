import { z } from 'zod';

export const UsuarioScalarFieldEnumSchema = z.enum([
  'id',
  'nomeCompleto',
  'email',
  'senha',
  'genero',
  'dataNascimento',
  'perfil',
  'organizacao',
  'tentativasLogin',
  'tentativasExclusao',
  'bloqueadoAte',
  'tokenRedefinirSenha',
  'expiraRedefinirSenha',
]);
