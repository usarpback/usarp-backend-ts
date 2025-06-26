import { z } from "zod/v4";
import { userCreateSchema } from "./user.schema.js";

export const signUpBodySchema = userCreateSchema;
export const signUpResponseSchema = {
  201: z.object({
    createdUser: userCreateSchema.extend({
      id: z.uuid(),
    }),
  }),
  400: z.string(),
};

export const signInBodySchema = z.object({
  email: z.email(),
  senha: z.string(),
});
export const signInResponseSchema = {
  200: z.object({
    generatedToken: z.string(),
  }),
  403: z.string(),
  404: z.string(),
};

export const forgotPasswordBodySchema = z.object({
  email: z.email(),
});
export const forgotPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
};

export const resetPasswordBodySchema = z.object({
  userId: z.uuid(),
  token: z.string(),
  novaSenha: z.string().min(6),
});
export const resetPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
  404: z.string(),
};
