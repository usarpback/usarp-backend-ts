import { z } from "zod";
import { createProjectSchema } from "@/schemas/project.schema.js";

export type Project = z.infer<typeof createProjectSchema>;
