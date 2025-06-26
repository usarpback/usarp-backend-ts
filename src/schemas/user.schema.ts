import { z } from "zod";
import { UsuarioCreateInputObjectSchema, UsuarioUpdateInputObjectSchema } from "@prisma/zod/schemas";

export const userCreateSchema = UsuarioCreateInputObjectSchema;
export const userUpdateSchema = UsuarioUpdateInputObjectSchema;

export const getUsersResponseSchema = {
  200: z.array(userCreateSchema)
};

export const getUserParamsSchema = z.object({
  id: z.string()
});
export const getUserResponseSchema = {
  200: userCreateSchema,
  404: z.string()
};

export const updateUserParamsSchema = getUserParamsSchema;
export const updateUserBodySchema = userUpdateSchema;
export const updateUserResponseSchema = getUserResponseSchema;

export const changeUserPasswordParamsSchema = getUserParamsSchema;
export const changeUserPasswordBodySchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmNewPassword: z.string()
});
export const changeUserPasswordResponseSchema = {
  200: z.string(),
  400: z.string(),
  404: z.string()
};

export const deleteUserParamsSchema = getUserParamsSchema;
export const deleteUserBodySchema = z.object({
  password: z.string()
});
export const deleteUserResponseSchema = changeUserPasswordResponseSchema;
