import { z } from "zod";
import { createProjectSchema } from "@/schemas/project.schema";

export type Project = z.infer<typeof createProjectSchema>;
