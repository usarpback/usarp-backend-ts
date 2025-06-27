import { z } from "zod/v4";
import {
  changeUserPasswordBodySchema,
  changeUserPasswordParamsSchema,
  deleteUserBodySchema,
  deleteUserParamsSchema,
  getUserParamsSchema,
  updateUserParamsSchema,
} from "@/schemas/user.schema.js";
import { Prisma } from "@prisma/generated/prisma/client.js";

export type User = Prisma.UsuarioCreateInput;
export type UpdateUser = Prisma.UsuarioUpdateInput;

export type GetUserParams = z.infer<typeof getUserParamsSchema>;

export type UpdateUserParams = z.infer<typeof updateUserParamsSchema>;

export type DeleteUserParams = z.infer<typeof deleteUserParamsSchema>;
export type DeleteUserBody = z.infer<typeof deleteUserBodySchema>;

export type ChangeUserPasswordParams = z.infer<
  typeof changeUserPasswordParamsSchema
>;
export type ChangeUserPasswordBody = z.infer<
  typeof changeUserPasswordBodySchema
>;
