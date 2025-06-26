import { FastifyTypedInstance } from "../types/fastify";
import { authenticate } from "../middlewares/auth.middleware";
import {
  createBrainstorming,
  getAllBrainstormings,
} from "@/controllers/brainstorming.controller";
import {
  brainstormingCreateSchema,
  createBrainstormingResponseSchema,
  getAllBrainstormingsResponseSchema,
} from "@/schemas/brainstorming.schema";

export async function loadBrainstormingRoutes(app: FastifyTypedInstance) {
  app.get(
    "/",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["brainstorming"],
        response: getAllBrainstormingsResponseSchema,
      },
    },
    getAllBrainstormings
  );

  app.post(
    "/create",
    {
      preHandler: [authenticate],
      schema: {
        tags: ["brainstorming"],
        body: brainstormingCreateSchema,
        response: createBrainstormingResponseSchema,
      },
    },
    createBrainstorming
  );
}
