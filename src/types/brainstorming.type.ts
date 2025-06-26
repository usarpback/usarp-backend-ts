import { z } from "zod";
import { brainstormingCreateSchema } from "@/schemas/brainstorming.schema";

export type Brainstorming = z.infer<typeof brainstormingCreateSchema>;
