import { z } from "zod/v4";

export const userCreateSchema = z
  .object({
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
  })
  .describe("Cria um novo usuário.");

export const userResponseSchema = userCreateSchema
  .omit({ senha: true })
  .describe("Retorna um usuário.");

export const userUpdateSchema = userCreateSchema
  .partial()
  .describe("Atualiza um usuário.");

export const getUsersResponseSchema = {
  200: z
    .array(userResponseSchema)
    .describe("Retorna uma lista com todos os usuários."),
};

export const getUserParamsSchema = z
  .object({
    id: z.uuid(),
  })
  .describe("Obtém um usuário pelo ID.");

export const getUserResponseSchema = {
  200: userResponseSchema.describe("Retorna um usuário."),
  404: z.string().describe("Retorna uma mensagem de erro."),
};

export const updateUserParamsSchema = getUserParamsSchema;
export const updateUserBodySchema = userUpdateSchema;
export const updateUserResponseSchema = getUserResponseSchema;

export const changeUserPasswordParamsSchema = getUserParamsSchema;
export const changeUserPasswordBodySchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z.string(),
    confirmNewPassword: z.string(),
  })
  .describe("Altera a senha do usuário.");
export const changeUserPasswordResponseSchema = {
  200: z.string().describe("Retorna uma mensagem de sucesso."),
  400: z.string().describe("Retorna uma mensagem de erro."),
  404: z.string().describe("Retorna uma mensagem de erro."),
};

export const deleteUserParamsSchema = getUserParamsSchema.describe(
  "Deleta um usuário pelo ID.",
);
export const deleteUserBodySchema = z
  .object({
    password: z.string(),
  })
  .describe("Deleta um usuário.");
export const deleteUserResponseSchema = changeUserPasswordResponseSchema;
