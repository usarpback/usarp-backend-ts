import { addMinutes, isAfter } from "date-fns";
import { prisma } from "@/plugins/prisma";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { AuthenticatedUser } from "@/types/auth.type";
import { updateUserById } from "@/repositories/user.repository";
import { User } from "@/types/user.type";

type UserStatus = {
  status: string;
  message?: string;
};

export function verifyUserToken(token: string) {
  try {
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as AuthenticatedUser;
    return payload;
  } catch (_) {
    return null;
  }
}

export function generateTokenForUser(user: AuthenticatedUser) {
  const generatedToken = jwt.sign(
    { ...user },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return generatedToken;
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, process.env.SALT_ROUNDS);
}

export async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function getUserLockedStatus(user: User): Promise<UserStatus> {
  const now = new Date();

  if (user.bloqueadoAte && isAfter(now, new Date(user.bloqueadoAte))) {
    await prisma.usuario.update({
      where: { id: user.id },
      data: { tentativasLogin: 0, bloqueadoAte: null }
    });

    return {
      status: "reset",
      message: "A conta estava bloqueada, mas o tempo de bloqueio expirou. O acesso foi liberado.",
    };
  }

  if (user.bloqueadoAte) {
    const unlockTime = new Date(user.bloqueadoAte).toLocaleString("pt-BR");

    return {
      status: "blocked",
      message: `Conta bloqueada. Tente novamente após ${unlockTime}.`
    };
  }

  return { status: "ok" };
}

export async function getUserAttemptsStatus(user: User, providedPassword: string): Promise<UserStatus> {
  const isSamePassword = await comparePassword(providedPassword, user.senha);
  if (isSamePassword) return {
    status: "ok"
  };

  const attempts = (user.tentativasLogin ?? 0) + 1;
  const reachedMaxAttempts = attempts >= 3;
  if (reachedMaxAttempts) {
    await updateUserById(user.id!, {
      bloqueadoAte: addMinutes(new Date(), 10 * attempts),
      tentativasLogin: attempts
    });
  }

  const status = { status: "blocked" };

  return reachedMaxAttempts ?
    {...status, message: "Conta bloqueada por 10 minutos devido a múltiplas tentativas incorretas."} :
    {...status, message: `Senha inválida. Você ainda tem ${3 - attempts} tentativa(s).`};
}
