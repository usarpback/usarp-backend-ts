import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  DATABASE_URL: z.string().url("DATABASE_URL deve ser uma URL válida"),
  PORT: z.string().default("3000").transform(Number),
  NODE_ENV: z.string().default("development"),
  JWT_EXPIRES_IN: z
    .string()
    .default("86400")
    .transform((value) => {
      const number = parseInt(value, 10);
      if (isNaN(number) || number < 1) {
        throw new Error("JWT_EXPIRES_IN deve ser um número inteiro positivo");
      }
      return number;
    }),
  JWT_ALGORITHM: z
    .string()
    .default("HS256")
    .transform((value) => value.toUpperCase()),
  SALT_ROUNDS: z
    .string()
    .default("10")
    .transform((value) => {
      const number = parseInt(value, 10);

      if (isNaN(number) || number < 1) {
        throw new Error("SALT_ROUNDS deve ser um número inteiro positivo");
      }

      return number;
    }),
  JWT_SECRET: z
    .string()
    .min(10, "JWT_SECRET deve ter pelo menos 10 caracteres"),
  ALLOWED_ORIGINS: z
    .string()
    .default("")
    .transform((value) => value.split(",").map(value => value.trim())),
  ADMIN_KEY: z
    .string()
    .min(10, "ADMIN_KEY deve ter pelo menos 10 caracteres")
    .default("admin12345"),
});

const parseResult = envSchema.safeParse(process.env);

if (!parseResult.success) {
  console.error("❌ Erro na validação das variáveis de ambiente:\n");

  for (const { message, path } of parseResult.error.errors) {
    console.error(`  - ${path.join(".")}: ${message}`);
  }

  process.exit(1);
}

Object.assign(process.env, parseResult.data);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Readonly<z.infer<typeof envSchema>> {}
  }
}
