import { z } from "zod";
import { userCreateSchema, userUpdateSchema } from "@/schemas/user.schema.js";

export type User = z.infer<typeof userCreateSchema>;
export type UpdateUser = z.infer<typeof userUpdateSchema>;
