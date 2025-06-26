import { FastifyTypedInstance } from "../types/fastify.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
  createBrainstorming,
  getAllBrainstormings,
} from "@/controllers/brainstorming.controller.js";
import {
  brainstormingCreateSchema,
  createBrainstormingResponseSchema,
  getAllBrainstormingsResponseSchema,
} from "@/schemas/brainstorming.schema.js";

export async function loadBrainstormingRoutes(app: FastifyTypedInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["brainstorming"],
        description: "Lista todos os brainstormings do usuário",
        response: getAllBrainstormingsResponseSchema,
      },
    },
    getAllBrainstormings,
  );

  app.post(
    "/create",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["brainstorming"],
        description: "Cria um novo brainstorming",
        body: brainstormingCreateSchema,
        response: createBrainstormingResponseSchema,
      },
    },
    createBrainstorming,
  );
}
