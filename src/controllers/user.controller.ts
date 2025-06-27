import { userRepository } from "@/repositories/user.repository.js";
import { comparePassword, hashPassword } from "@/services/auth.service.js";
import {
  ChangeUserPasswordBody,
  ChangeUserPasswordParams,
  DeleteUserBody,
  DeleteUserParams,
  GetUserParams,
  UpdateUser,
  UpdateUserParams,
} from "@/types/user.type.js";
import { FastifyReply, FastifyRequest } from "fastify";

export async function getAllUsers(_: FastifyRequest, reply: FastifyReply) {
  const users = await userRepository.findAll();
  return reply.status(200).send(users);
}

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as GetUserParams;

  const user = await userRepository.findById(id);
  if (!user) return reply.status(404).send("Usuário não encontrado.");

  return reply.status(200).send(user);
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as UpdateUserParams;
  const updatedData = request.body as UpdateUser;

  const updatedUser = await userRepository.update(id, updatedData);
  if (!updatedUser)
    return reply.status(404).send("Não foi possível atualizar o usuário.");

  return reply.status(200).send(updatedUser);
}

export async function changeUserPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as ChangeUserPasswordParams;
  const { currentPassword, newPassword, confirmNewPassword } =
    request.body as ChangeUserPasswordBody;

  if (newPassword !== confirmNewPassword)
    return reply.status(400).send("As novas senhas não coincidem.");

  const user = await userRepository.findById(id);
  if (!user) return reply.status(404).send("Usuário não encontrado.");

  if (!comparePassword(currentPassword, user.senha))
    return reply.status(400).send("Senha atual inválida.");

  const hashedPassword = await hashPassword(newPassword);

  const updatedUser = await userRepository.update(id, {
    senha: hashedPassword,
  });
  if (!updatedUser)
    return reply.status(404).send("Não foi possível atualizar o usuário.");

  return reply.status(200).send("Senha atualizada com sucesso!");
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as DeleteUserParams;
  const { password } = request.body as DeleteUserBody;

  const user = await userRepository.findById(id);
  if (!user) return reply.status(404).send("Usuário não encontrado.");

  if (!comparePassword(password, user.senha))
    return reply.status(400).send("Senha inválida.");

  const deletedUser = await userRepository.delete(id);
  if (!deletedUser)
    return reply.status(404).send("Não foi possível deletar o usuário.");

  return reply.status(200).send("Usuário deletado com sucesso!");
}
