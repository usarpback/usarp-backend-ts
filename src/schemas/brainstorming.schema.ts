import { z } from "zod/v4";

export const brainstormingCreateSchema = z
  .object({
    titulo: z.string(),
    projetoRelacionado: z.string(),
    data: z.string(),
    horario: z.string(),
    historiasUsuario: z.string(),
    criadorId: z.uuid(),
  })
  .describe("Cria um novo brainstorming.");
export const brainstormingResponseSchema = brainstormingCreateSchema
  .extend({
    id: z.uuid(),
  })
  .describe("Retorna um brainstorming.");

export const createBrainstormingBodySchema = brainstormingCreateSchema;
export const createBrainstormingResponseSchema = {
  201: brainstormingResponseSchema.describe("Retorna um brainstorming criado."),
  400: z.string().describe("Retorna uma mensagem de erro."),
};

export const getAllBrainstormingsResponseSchema = {
  200: z
    .array(brainstormingResponseSchema)
    .describe("Retorna uma lista de com todos os brainstormings."),
};
