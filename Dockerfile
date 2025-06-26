FROM node:20-alpine AS builder

WORKDIR /usr/app

RUN apk update && apk upgrade --no-cache

COPY package*.json tsconfig.json ./
RUN npm install

COPY . .

RUN npx prisma generate

FROM node:20-alpine

WORKDIR /usr/app

RUN apk update && apk upgrade --no-cache

COPY --from=builder /usr/app .

EXPOSE 3333

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
