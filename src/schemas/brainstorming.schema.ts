import { z } from "zod";
import { BrainstormingCreateInputObjectSchema } from "@prisma/zod/schemas";

export const brainstormingCreateSchema = BrainstormingCreateInputObjectSchema;

export const getAllBrainstormingsResponseSchema = {
  200: z.array(brainstormingCreateSchema)
};

export const createBrainstormingResponseSchema = {
  201: brainstormingCreateSchema,
  400: z.string(),
};
