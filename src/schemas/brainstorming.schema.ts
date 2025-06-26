import { z } from "zod/v4";

export const brainstormingCreateSchema = z.object({
  titulo: z.string(),
  projetoRelacionado: z.string(),
  data: z.string(),
  horario: z.string(),
  historiasUsuario: z.string(),
  criadorId: z.uuid(),
});
export const brainstormingResponseSchema = brainstormingCreateSchema.extend({
  id: z.uuid(),
});

export const createBrainstormingBodySchema = brainstormingCreateSchema;
export const createBrainstormingResponseSchema = {
  201: brainstormingResponseSchema,
  400: z.string(),
};

export const getAllBrainstormingsResponseSchema = {
  200: z.array(brainstormingResponseSchema),
};
