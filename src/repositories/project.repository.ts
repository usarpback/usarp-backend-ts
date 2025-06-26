import { prisma } from "@/plugins/prisma";
import { Project } from "@/types/project.type";

export const projectRepository = {
  create: async (data: Project) => {
    const projectExists = await projectRepository.existsById(data.id!);
    if (projectExists) return null;

    const createdProject = await prisma.projeto.create({
      data: { ...data },
    });
    return createdProject;
  },
  existsById: async (id: string) => {
    const project = await prisma.projeto.findUnique({
      where: { id },
      select: { id: true }
    });
    return !!project;
  },
  findById: async (id: string) => {
    const project = await prisma.projeto.findUnique({
      where: { id },
    });
    return project;
  },
  findAllByCreatorId: async (creatorId: string) => {
    const projects = await prisma.projeto.findMany({
      where: { criadorId: creatorId },
    });
    return projects;
  },
};
