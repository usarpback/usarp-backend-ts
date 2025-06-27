import { z } from "zod/v4";
import { userCreateSchema } from "./user.schema.js";

export const signUpBodySchema = userCreateSchema.describe(
  "Cria um novo usuário.",
);
export const signUpResponseSchema = {
  201: z
    .object({
      createdUser: userCreateSchema.extend({
        id: z.uuid(),
      }),
    })
    .describe("Retorna o usuário criado."),
  400: z.string().describe("Retorna uma mensagem de erro."),
};

export const signInBodySchema = z
  .object({
    email: z.email(),
    senha: z.string(),
  })
  .describe("Realiza o login do usuário.");
export const signInResponseSchema = {
  200: z
    .object({
      generatedToken: z.string(),
    })
    .describe("Retorna o token de autenticação."),
  403: z.string().describe("Retorna uma mensagem de erro."),
  404: z.string().describe("Retorna uma mensagem de erro."),
};

export const forgotPasswordBodySchema = z
  .object({
    email: z.email(),
  })
  .describe("Envia um e-mail para o usuário para resetar a senha.");
export const forgotPasswordResponseSchema = {
  200: z.string().describe("Retorna uma mensage de sucesso."),
  400: z.string().describe("Retorna uma mensagem de erro."),
};

export const resetPasswordBodySchema = z
  .object({
    userId: z.uuid(),
    token: z.string(),
    novaSenha: z.string().min(6),
  })
  .describe("Redefinição de senha.");
export const resetPasswordResponseSchema = {
  200: z.string().describe("Retorna uma mensagem de sucesso."),
  400: z.string().describe("Retorna uma mensagem de erro."),
  404: z.string().describe("Retorna uma mensagem de erro."),
};
