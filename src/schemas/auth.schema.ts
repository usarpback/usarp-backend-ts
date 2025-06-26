import { z } from "zod";
import { userCreateSchema } from "./user.schema";

export const signUpBodySchema = userCreateSchema;
export const signUpResponseSchema = {
  201: z.object({ createdUser: signUpBodySchema }),
  400: z.string(),
};

export const signInBodySchema = z.object({
  email: z.string(),
  senha: z.string(),
});
export const signInResponseSchema = {
  200: z.object({
    generatedToken: z.string()
  }),
  403: z.string(),
  404: z.string(),
};

export const forgotPasswordBodySchema = z.object({
  email: z.string(),
});
export const forgotPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
};

export const resetPasswordBodySchema = z.object({
  userId: z.string(),
  token: z.string(),
  novaSenha: z.string(),
});
export const resetPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
  404: z.string(),
};
