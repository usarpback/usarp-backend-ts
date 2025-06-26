import { z } from "zod";
import { brainstormingCreateSchema } from "@/schemas/brainstorming.schema.js";

export type Brainstorming = z.infer<typeof brainstormingCreateSchema>;
