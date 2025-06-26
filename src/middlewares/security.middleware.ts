import { FastifyInstance } from "fastify";
import fastifyHelmet from "@fastify/helmet";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifyCors from "@fastify/cors";

const blockedMethods = ["TRACE"];
const allowedOrigins = process.env.ALLOWED_ORIGINS;

export async function securityMiddleware(app: FastifyInstance) {
  app.register(fastifyCors, {
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
          return callback(null, true);
        }

        return callback(new Error('Origem não permitida!'), false);
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    });

  app.register(fastifyHelmet, {
    hidePoweredBy: true,
    contentSecurityPolicy: false,
  });

  app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: "1 minute",
    errorResponseBuilder: () => ({
      statusCode: 429,
      error: "Too Many Requests",
      message: `Você excedeu o limite de requisições. Tente novamente mais tarde.`,
    }),
  });

  app.addHook("onRequest", async (request, reply) => {
    if (blockedMethods.includes(request.method)) {
      return reply.status(405).send({ error: "Método não permitido" });
    }
  });

  app.addHook("onSend", async (_, reply) => {
    reply.header("X-Powered-By", "Hidden");
  });
}
