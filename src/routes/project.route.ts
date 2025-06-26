import { FastifyTypedInstance } from "../types/fastify";
import { authenticate } from "../middlewares/auth.middleware";
import {
  createProject,
  getUserProjects,
} from "@/controllers/project.controller";
import {
  createProjectBodySchema,
  createProjectResponseSchema,
  getUserProjectsResponseSchema,
} from "@/schemas/project.schema";

export async function loadProjectRoutes(app: FastifyTypedInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["projeto"],
        response: getUserProjectsResponseSchema,
      },
    },
    getUserProjects
  );

  app.post(
    "/create",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["projeto"],
        body: createProjectBodySchema,
        response: createProjectResponseSchema,
      },
    },
    createProject
  );
}
