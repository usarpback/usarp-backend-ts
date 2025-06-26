import { z } from "zod";
import { ProjetoCreateInputObjectSchema } from "@prisma/zod/schemas";

export const createProjectSchema = ProjetoCreateInputObjectSchema;

export const getUserProjectsResponseSchema = {
  200: z.object({
    projects: z.array(ProjetoCreateInputObjectSchema),
    count: z.number(),
  }),
};

export const createProjectBodySchema = createProjectSchema;
export const createProjectResponseSchema = {
  201: createProjectSchema,
  400: z.string(),
};
