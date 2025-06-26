import fp from "fastify-plugin";
import { FastifyInstance } from "fastify";
import { PrismaClient } from '@prisma/generated/prisma'

export const prisma = new PrismaClient();

export default fp(async (server: FastifyInstance) => {
  server.decorate("prisma", prisma);
  server.addHook("onClose", async (app) => {
    await app.prisma.$disconnect();
  });
});
