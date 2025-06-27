<img src="http://russas.ufc.br/uploads/61c4bed6f8b2f3eccae2ad2c708916.png" alt="Logo do LUDI" width="120" />

# USARP

---

## ✨ Funcionalidades

- **Autenticação de usuários**
  - Login
  - Cadastro
  - Recuperação e redefinição de senha

- **Gerenciamento de usuários**
  - Consulta de usuários
  - Atualização de dados e senha
  - Exclusão de conta

- **Brainstormings**
  - Listagem pública
  - Criação autenticada de brainstormings

- **Projetos**
  - Listagem de projetos do usuário
  - Criação de novos projetos

---

## 🧩 Tecnologias e Bibliotecas

- **Node.js** + **Fastify**
- **ZodV4**
- **TypeScript**
- **JWT** para autenticação
- **Prisma** para ORM
- **Nodemailer** para envio de e-mails
- **Swagger/OpenAPI** para documentação
- **Docker** para contêineres

---

## 🏁 Como rodar o projeto

```bash
# Instale as dependências
npx prisma generate
npm install

# Inicie o servidor
npm run dev
```

A documentação interativa (Swagger) estará disponível em: http://localhost:PORT/api-docs
