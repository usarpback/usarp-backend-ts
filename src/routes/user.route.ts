import { FastifyTypedInstance } from "../types/fastify";
import { authenticate } from "../middlewares/auth.middleware";
import {
  changeUserPassword,
  deleteUser,
  getUser,
  getAllUsers,
  updateUser,
} from "@/controllers/user.controller";
import {
  changeUserPasswordBodySchema,
  changeUserPasswordParamsSchema,
  changeUserPasswordResponseSchema,
  deleteUserBodySchema,
  deleteUserParamsSchema,
  deleteUserResponseSchema,
  getUserParamsSchema,
  getUserResponseSchema,
  getUsersResponseSchema,
  updateUserBodySchema,
  updateUserParamsSchema,
  updateUserResponseSchema,
} from "@/schemas/user.schema";

export async function loadUserRoutes(app: FastifyTypedInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["usuario"],
        description: "Lista todos os usuários",
        response: getUsersResponseSchema,
      },
    },
    getAllUsers
  );

  app.get(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["usuario"],
        description: "Obtém um usuário pelo ID",
        params: getUserParamsSchema,
        response: getUserResponseSchema,
      },
    },
    getUser
  );

  app.put(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["usuario"],
        description: "Atualiza um usuário pelo ID",
        params: updateUserParamsSchema,
        body: updateUserBodySchema,
        response: updateUserResponseSchema,
      },
    },
    updateUser
  );

  app.patch(
    "/:id/password",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["usuario"],
        description: "Altera a senha de um usuário pelo ID",
        params: changeUserPasswordParamsSchema,
        body: changeUserPasswordBodySchema,
        response: changeUserPasswordResponseSchema,
      },
    },
    changeUserPassword
  );

  app.delete(
    "/:id",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["usuario"],
        description: "Deleta um usuário pelo ID",
        params: deleteUserParamsSchema,
        body: deleteUserBodySchema,
        response: deleteUserResponseSchema,
      },
    },
    deleteUser
  );
}
