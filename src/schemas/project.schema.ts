import { z } from "zod/v4";

export const statusProjetoEnum = z.enum(["NOVO", "DELETADO", "ANTIGO"]);

export const createProjectSchema = z.object({
  nomeProjeto: z.string(),
  descricao: z.string().optional(),
  status: statusProjetoEnum.optional(),
  criadorId: z.uuid(),
});

export const projectResponseSchema = createProjectSchema.extend({
  id: z.uuid(),
});

export const createProjectBodySchema = createProjectSchema;

export const createProjectResponseSchema = {
  201: projectResponseSchema,
  400: z.string(),
};

export const getUserProjectsResponseSchema = {
  200: z.object({
    projects: z.array(projectResponseSchema),
    count: z.number(),
  }),
};
