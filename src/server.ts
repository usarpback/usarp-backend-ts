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

import prismaPlugin from "@/plugins/prisma";
import errorHandlerPlugin from "@/plugins/error-handler";

import { securityMiddleware } from "@/middlewares/security.middleware";
import { registerAllRoutes } from "@/routes";

const port = process.env.PORT || 3001;

async function bootstrap() {
  const app = fastify({
    logger: true,
    bodyLimit: 1_000_000
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
        version: "1.0.0",
      },
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

//COLOCAR DESCCRIÇÃO NAS ROTAS
//PEGAR OS TIPOS DO PROPRIO PRISMA CLIENT E ME VIRAR, VAI DA CERTO!
//TODO: VER UM JEITO DE CHAMAR SÓ UMA VEZ O AUTHENTICATE POR ROTA, DEIXAR MAIS MINIMO POSSÍVEL
//TODO: VER UM JEITO DE UNIFICAR AS MENSAGENS DE ERRO PARA DEIXAR MAIS EXPRESSIVA
