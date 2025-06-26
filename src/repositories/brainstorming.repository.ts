import { prisma } from "@/plugins/prisma.js";
import { Brainstorming } from "@/types/brainstorming.type.js";

export const brainstormingRepository = {
  create: async (data: Brainstorming) => {
    const createdBrainstorming = await prisma.brainstorming.create({
      data: { ...data },
    });
    return createdBrainstorming;
  },
  findAll: async () => {
    const brainstormings = await prisma.brainstorming.findMany();
    return brainstormings;
  },
  findById: async () => {},
  update: async () => {},
  delete: async () => {},
};
