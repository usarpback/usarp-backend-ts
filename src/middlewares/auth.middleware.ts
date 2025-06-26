import { verifyUserToken } from "@/services/auth.service";
import { FastifyRequest, FastifyReply } from "fastify";

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authHeader = request.headers.authorization;

  if (!authHeader?.startsWith("Bearer "))
    return reply.status(401).send("Token não fornecido");

  const token = authHeader.split(" ")[1];

  const payload = verifyUserToken(token);
  if (!payload) return reply.status(401).send("Usuário não logado.");

  const user = await request.server.prisma.usuario.findUnique({
    where: { id: payload.id },
  });
  if (!user) return reply.status(401).send("Usuário não encontrado.");

  request.user = { ...payload };
}
