import { z } from "zod";
import { FastifyReply, FastifyRequest } from "fastify";
import { addMinutes } from "date-fns";

import { transport } from "@/mail/index.js";
import { Logger } from "@/events/log.js";
import {
  generateTokenForUser,
  getUserAttemptsStatus,
  getUserLockedStatus,
  hashPassword,
} from "@/services/auth.service.js";
import { userRepository } from "@/repositories/user.repository.js";
import { User } from "@/types/user.type.js";
import {
  forgotPasswordBodySchema,
  resetPasswordBodySchema,
  signInBodySchema,
} from "@/schemas/auth.schema.js";

export async function signUp(request: FastifyRequest, reply: FastifyReply) {
  const { senha, ...data } = request.body as User;

  const existingUser = await userRepository.existsByEmail(data.email);
  if (existingUser) {
    Logger.warn(`Tentativa de registro com e-mail já existente: ${data.email}`);
    return reply.status(400).send("Já existe um usuário com este e-mail.");
  }

  const hashedPassword = await hashPassword(senha);
  const createdUser = await userRepository.create({
    ...data,
    senha: hashedPassword,
  });
  if (!createdUser)
    return reply.status(400).send("Não foi possível criar o usuário.");

  Logger.log("Usuário registrado com sucesso!");
  return reply.status(201).send({ createdUser });
}

export async function signIn(request: FastifyRequest, reply: FastifyReply) {
  const { email, senha } = request.body as z.infer<typeof signInBodySchema>;

  const user = await userRepository.findByEmail(email);
  if (!user) {
    Logger.warn(`Tentativa de login com e-mail não registrado: ${email}`);
    return reply.status(400).send("Credenciais inválidas ou expiradas.");
  }

  const userLockedStatus = await getUserLockedStatus(user);
  if (userLockedStatus.status === "blocked") {
    return reply.status(403).send(userLockedStatus.message);
  }

  const userAttemptsStatus = await getUserAttemptsStatus(user, senha);
  if (userAttemptsStatus.status === "blocked") {
    return reply.status(403).send(userAttemptsStatus.message);
  }

  const updatedUser = await userRepository.update(user.id, {
    tentativasLogin: 0,
    bloqueadoAte: null,
    tentativasExclusao: 0,
  });
  if (!updatedUser)
    return reply.status(404).send("Não foi possível atualizar o usuário.");

  const generatedToken = generateTokenForUser({
    id: user.id,
    email: user.email,
    scope: "admin",
  });

  return reply.status(200).send({ generatedToken });
}

export async function forgotPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { email } = request.body as z.infer<typeof forgotPasswordBodySchema>;
  if (!email)
    return reply.status(400).send("Credenciais inválidas ou expiradas.");

  const user = await userRepository.findByEmail(email);
  if (!user) {
    Logger.warn(`Tentativa de recuperação com e-mail não existente: ${email}`);
    return reply.status(400).send("Credenciais inválidas ou expiradas.");
  }

  const generatedToken = generateTokenForUser({
    id: user.id,
    email: user.email,
    scope: "password_reset",
  });

  const resetLink = `http://localhost:${process.env.PORT}/auth/reset-password/${user.id}/${generatedToken}`;

  try {
    await transport.sendMail({
      to: email,
      from: "mailusarp@gmail.com",
      subject: "Recuperação de Senha",
      template: "forgot_password",
      context: { reset_link: resetLink },
    } as any);

    const expiresIn = addMinutes(new Date(), 30);

    await userRepository.update(user.id, {
      tokenRedefinirSenha: generatedToken,
      expiraRedefinirSenha: expiresIn,
    });

    Logger.log(`E-mail de recuperação enviado para ${email}`);
    return reply
      .status(200)
      .send("O e-mail de recuperação foi enviado com sucesso.");
  } catch (error) {
    Logger.error(`Erro ao enviar e-mail de recuperação: ${error}`);
    return reply.status(500).send("Erro interno do servidor.");
  }
}

export async function resetPassword(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { userId, token, novaSenha } = request.body as z.infer<
    typeof resetPasswordBodySchema
  >;

  if (!userId || !token || !novaSenha)
    return reply.status(400).send("Credenciais inválidas ou expiradas.");

  const user = await userRepository.findById(userId);
  if (!user) {
    Logger.warn(
      `Tentativa de resetar senha com userId não registrado: ${userId}`,
    );
    return reply.status(400).send("Credenciais inválidas ou expiradas.");
  }

  if (token !== user.tokenRedefinirSenha)
    return reply.status(400).send("Credenciais inválidas ou expiradas.");
  if (
    !user.expiraRedefinirSenha ||
    new Date() > new Date(user.expiraRedefinirSenha)
  )
    return reply.status(400).send("Credenciais inválidas ou expiradas.");

  const hashedPassword = await hashPassword(novaSenha);

  const updatedUser = await userRepository.update(userId, {
    senha: hashedPassword,
    tokenRedefinirSenha: null,
    expiraRedefinirSenha: null,
  });
  if (!updatedUser)
    return reply.status(404).send("Não foi possível atualizar o usuário.");

  Logger.log(`Senha redefinida para o usuário ${user.email}`);
  return reply.status(200).send("Senha redefinida com sucesso.");
}
