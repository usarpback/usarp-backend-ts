import { z } from "zod/v4";

export const statusProjetoEnum = z.enum(["NOVO", "DELETADO", "ANTIGO"]);

export const createProjectSchema = z
  .object({
    nomeProjeto: z.string(),
    descricao: z.string().optional(),
    status: statusProjetoEnum.optional(),
    criadorId: z.uuid(),
  })
  .describe("Cria um novo projeto.");

export const projectResponseSchema = createProjectSchema
  .extend({
    id: z.uuid(),
  })
  .describe("Retorna um projeto.");

export const createProjectBodySchema = createProjectSchema;

export const createProjectResponseSchema = {
  201: projectResponseSchema.describe("Retorna um novo projeto criado."),
  400: z.string().describe("Retorna uma mensagem de erro."),
};

export const getUserProjectsResponseSchema = {
  200: z
    .object({
      projects: z
        .array(projectResponseSchema)
        .describe("Retorna uma lista com todos os projetos do usuário."),
      count: z.number().describe("Retorna a quantidade de projetos."),
    })
    .describe(
      "Retorna uma lista com todos os projetos do usuário e a quantidade de projetos.",
    ),
};
