import { prisma } from "@/plugins/prisma.js";
import { UpdateUser, User } from "@/types/user.type.js";

export const userRepository = {
  existsByEmail: async (email: string) => {
    const user = await prisma.usuario.findUnique({
      where: { email },
      select: { id: true },
    });
    return !!user;
  },
  create: async (data: User) => {
    const userExists = await userRepository.existsByEmail(data.email);
    if (userExists) return null;

    const createdUser = await prisma.usuario.create({ data });
    return createdUser;
  },
  findAll: async () => {
    const users = await prisma.usuario.findMany();
    return users;
  },
  findById: async (userId: string) => {
    const user = await prisma.usuario.findUnique({
      where: { id: userId },
    });
    return user;
  },
  findByEmail: async (email: string) => {
    const user = await prisma.usuario.findUnique({
      where: { email },
    });
    return user;
  },
  update: async (id: string, data: UpdateUser) => {
    const user = await userRepository.findById(id);
    if (!user) return null;

    const updatedUser = await prisma.usuario.update({
      where: { id },
      data,
    });
    return updatedUser;
  },
  delete: async (id: string) => {
    const user = await userRepository.findById(id);
    if (!user) return null;

    const deletedUser = await prisma.usuario.delete({
      where: { id },
    });
    return deletedUser;
  },
};
