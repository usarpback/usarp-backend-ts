import { FastifyTypedInstance } from "../types/fastify";
import {
  signUpResponseSchema,
  signUpBodySchema,
  signInBodySchema,
  signInResponseSchema,
  forgotPasswordBodySchema,
  forgotPasswordResponseSchema,
  resetPasswordBodySchema,
  resetPasswordResponseSchema,
} from "@/schemas/auth.schema";
import {
  forgotPassword,
  resetPassword,
  signIn,
  signUp,
} from "../controllers/auth.controller";

export async function loadAuthenticationRoutes(app: FastifyTypedInstance) {
  app.post(
    "/sign-up",
    {
      schema: {
        tags: ["autenticacao"],
        description: "Registro de usuário",
        body: signUpBodySchema,
        response: signUpResponseSchema,
      },
    },
    signUp
  );

  app.post(
    "/sign-in",
    {
      schema: {
        tags: ["autenticacao"],
        description: "Login de usuário",
        body: signInBodySchema,
        response: signInResponseSchema,
      },
    },
    signIn
  );

  app.post(
    "/forgot-password",
    {
      schema: {
        tags: ["authentication"],
        description: "Solicitação de recuperação de senha",
        body: forgotPasswordBodySchema,
        response: forgotPasswordResponseSchema,
      },
    },
    forgotPassword
  );

  app.post(
    "/reset-password",
    {
      schema: {
        tags: ["authentication"],
        description: "Redefinição de senha",
        body: resetPasswordBodySchema,
        response: resetPasswordResponseSchema,
      },
    },
    resetPassword
  );
}
