import { z } from "zod/v4";

export const userCreateSchema = z.object({
  nomeCompleto: z.string(),
  email: z.email(),
  senha: z.string().min(6),
  genero: z.enum([
    "FEMININO",
    "MASCULINO",
    "NAO_BINARIO",
    "PREFERE_NAO_INFORMAR",
  ]),
  dataNascimento: z.string(),
  perfil: z.enum([
    "ESTUDANTE_GRADUACAO",
    "ESTUDANTE_POS_GRADUACAO",
    "PROFESSOR",
    "PROFISSIONAL_INDUSTRIA",
  ]),
  organizacao: z.string(),
});

export const userResponseSchema = userCreateSchema.omit({ senha: true });

export const userUpdateSchema = userCreateSchema.partial();

export const getUsersResponseSchema = {
  200: z.array(userResponseSchema),
};

export const getUserParamsSchema = z.object({
  id: z.uuid(),
});

export const getUserResponseSchema = {
  200: userResponseSchema,
  404: z.string(),
};

export const updateUserParamsSchema = getUserParamsSchema;
export const updateUserBodySchema = userUpdateSchema;
export const updateUserResponseSchema = getUserResponseSchema;

export const changeUserPasswordParamsSchema = getUserParamsSchema;
export const changeUserPasswordBodySchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string(),
});
export const changeUserPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
  404: z.string(),
};

export const deleteUserParamsSchema = getUserParamsSchema;
export const deleteUserBodySchema = z.object({
  password: z.string(),
});
export const deleteUserResponseSchema = changeUserPasswordResponseSchema;
