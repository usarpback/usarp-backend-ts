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

## 📚 Documentação das Rotas

As rotas estão documentadas utilizando `@asteasolutions/zod-to-openapi`, com schemas de validação integrados ao Zod.

### 🔐 Autenticação

| Método | Rota                    | Descrição                            |
| ------ | ----------------------- | ------------------------------------ |
| POST   | `/auth/sign-in`         | Login com e-mail e senha             |
| POST   | `/auth/sign-up`         | Registro de novo usuário             |
| POST   | `/auth/forgot-password` | Envia e-mail de recuperação de senha |
| POST   | `/auth/reset-password`  | Redefinição de senha com token       |

---

### 👤 Usuário

| Método | Rota              | Descrição                            |
| ------ | ----------------- | ------------------------------------ |
| GET    | `/users`          | Retorna dados do usuário autenticado |
| GET    | `/users/all`      | Retorna todos os usuários            |
| PUT    | `/users`          | Atualiza dados do usuário            |
| PATCH  | `/users/password` | Atualiza senha do usuário            |
| DELETE | `/users`          | Exclui a conta do usuário            |

---

### 💡 Brainstormings

| Método | Rota                     | Descrição                                |
| ------ | ------------------------ | ---------------------------------------- |
| GET    | `/brainstormings`        | Lista brainstormings existentes          |
| POST   | `/brainstormings/create` | Cria um novo brainstorming (autenticado) |

---

### 📁 Projetos

| Método | Rota               | Descrição                          |
| ------ | ------------------ | ---------------------------------- |
| GET    | `/projects`        | Lista os projetos do usuário       |
| POST   | `/projects/create` | Cria um novo projeto (autenticado) |

---

## 🧩 Tecnologias e Bibliotecas

- **Node.js** + **Express**
- **Zod** + **@asteasolutions/zod-to-openapi**
- **TypeScript**
- **JWT** para autenticação
- **Swagger/OpenAPI** para documentação

---

## 🏁 Como rodar o projeto

```bash
# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

A documentação interativa (Swagger) estará disponível em: http://localhost:PORT/api-docs
