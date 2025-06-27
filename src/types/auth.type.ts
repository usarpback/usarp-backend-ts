import { z } from "zod/v4";
import {
  forgotPasswordBodySchema,
  resetPasswordBodySchema,
  signInBodySchema,
} from "@/schemas/auth.schema.js";

export interface AuthenticatedUser {
  id: string;
  email: string;
  scope: "default" | "admin" | "password_reset";
}

export type SignInBody = z.infer<typeof signInBodySchema>;
export type ForgotPasswordBody = z.infer<typeof forgotPasswordBodySchema>;
export type ResetPasswordBody = z.infer<typeof resetPasswordBodySchema>;
