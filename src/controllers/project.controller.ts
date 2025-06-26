import { projectRepository } from "@/repositories/project.repository.js";
import { Project } from "@/types/project.type.js";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getUserProjects(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const userId = request.user?.id;

  const projects = await projectRepository.findAllByCreatorId(userId!);
  if (!projects)
    return reply.status(400).send("Não foi possível buscar os projetos");

  return reply.status(200).send({ projects, count: projects.length });
}

export async function createProject(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const data = request.body as Project;

  const project = await projectRepository.create(data);
  if (!project)
    return reply.status(400).send("Não foi possível criar o projeto");

  return reply.status(201).send(project);
}
