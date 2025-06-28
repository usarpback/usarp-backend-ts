FROM node:24-alpine AS builder

WORKDIR /usr/app

# Copia apenas arquivos essenciais para instalar dependências
COPY package*.json tsconfig.json ./

RUN npm ci --only=production

# Copia todo o código
COPY . .

# Gera os arquivos do Prisma
RUN npx prisma generate

FROM node:24-alpine

WORKDIR /usr/app

# Copia da etapa builder
COPY --from=builder /usr/app .

EXPOSE 3333

# Para produção com migrações:
# CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]

# Para desenvolvimento:docker exec -it usarp-backend-ts-app-1 npx prisma migrate dev --name init

CMD ["sh", "-c", "npx prisma migrate dev && npm run dev"]
