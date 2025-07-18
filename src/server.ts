import "@/settings/env";

import { fastify } from "fastify";
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
  jsonSchemaTransform,
} from "fastify-type-provider-zod";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";

import prismaPlugin from "@/plugins/prisma.js";
import errorHandlerPlugin from "@/plugins/error-handler.js";

import { securityMiddleware } from "@/middlewares/security.middleware.js";
import { registerAllRoutes } from "@/routes/index.js";

const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = fastify({
    logger: {
      level: "debug",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
        },
      },
    },
    bodyLimit: 1_000_000,
  }).withTypeProvider<ZodTypeProvider>();

  app.register(securityMiddleware);

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  app.register(prismaPlugin);
  app.register(errorHandlerPlugin);

  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: "USARP API",
        description: `A **USARP API** fornece endpoints RESTful para gerenciamento de usuários e projetos da plataforma USARP, com validações robustas e documentação OpenAPI.`,
        version: "1.0.0",
      },
      servers: [],
    },
    transform: jsonSchemaTransform,
  });

  app.register(fastifySwaggerUi, { routePrefix: "/docs" });

  await registerAllRoutes(app);

  await app.listen({ port });
  console.log(`Servidor inicializado na porta ${port}!`);
}

bootstrap().catch((error) => {
  console.error("Erro ao iniciar o servidor:", error);
  process.exit(1);
});

//TODO: VER UM JEITO DE CHAMAR SÓ UMA VEZ O AUTHENTICATE POR ROTA, DEIXAR MAIS MINIMO POSSÍVEL
//TODO: VER UM JEITO DE UNIFICAR AS MENSAGENS DE ERRO PARA DEIXAR MAIS EXPRESSIVA
