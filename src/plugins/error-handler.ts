import fp from "fastify-plugin";
import {
  FastifyError,
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { Logger } from "@/events/log.js";

export default fp(async function errorHandlerPlugin(app: FastifyInstance) {
  app.setErrorHandler(
    (error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
      const statusCode = error.statusCode ?? 500;

      Logger.error(`[${request.method} ${request.url}] ${error.message}`);
      if (process.env.NODE_ENV !== "production") {
        Logger.error(error.stack ?? "Sem stack trace");
      }

      if (error.validation) {
        return reply.status(400).send({
          statusCode: 400,
          error: "Bad Request",
          message: "Erro de validação nos dados enviados.",
          issues: error.validation,
        });
      }

      return reply.status(statusCode).send({
        statusCode,
        error: error.name ?? "InternalServerError",
        message:
          process.env.NODE_ENV === "production"
            ? "Ocorreu um erro interno no servidor."
            : error.message,
      });
    },
  );
});
