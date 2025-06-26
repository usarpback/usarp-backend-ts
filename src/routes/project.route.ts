import { FastifyTypedInstance } from "../types/fastify.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  createProject,
  getUserProjects,
} from "@/controllers/project.controller.js";
import {
  createProjectBodySchema,
  createProjectResponseSchema,
  getUserProjectsResponseSchema,
} from "@/schemas/project.schema.js";

export async function loadProjectRoutes(app: FastifyTypedInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["projeto"],
        description: "Lista todos os projetos do usuário",
        response: getUserProjectsResponseSchema,
      },
    },
    getUserProjects,
  );

  app.post(
    "/create",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["projeto"],
        description: "Cria um novo projeto",
        body: createProjectBodySchema,
        response: createProjectResponseSchema,
      },
    },
    createProject,
  );
}
