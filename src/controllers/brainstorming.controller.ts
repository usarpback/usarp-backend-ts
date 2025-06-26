import { brainstormingRepository } from "@/repositories/brainstorming.repository";
import { FastifyReply, FastifyRequest } from "fastify";
import { Brainstorming } from "@/types/brainstorming.type";

export async function getAllBrainstormings(
  _: FastifyRequest,
  reply: FastifyReply
) {
  const brainstormings = await brainstormingRepository.findAll();
  return reply.status(200).send(brainstormings);
}

export async function createBrainstorming(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const data = request.body as Brainstorming;

  const createdBrainstorming = await brainstormingRepository.create(data);
  if (!createdBrainstorming)
    return reply.status(400).send("Não foi possível criar o brainstorming.");

  return reply.status(201).send(createdBrainstorming);
}
