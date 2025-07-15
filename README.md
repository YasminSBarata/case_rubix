# 📚 Sistema de Cadastro de Livros – Case_Rubix

- ✅ Backend em Fastify + SQLite
- ✅ Frontend com Next.js + Tailwind CSS
- ✅ API RESTful com operações completas de CRUD
- ✅ Banco de dados local (`livros.db`)
- ✅ Separação entre frontend e backend

---

## 🚀 Tecnologias utilizadas

### Backend
- [Fastify](https://fastify.io/)
- [SQLite](https://www.sqlite.org/index.html) com `better-sqlite3`
- TypeScript

### Frontend
- [Next.js 13+ App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/)
- React + Hooks

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
- Node.js (v18+ recomendado)
- pnpm instalado (`npm i -g pnpm`)

### Clone o repositório
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 🔧 Backend
```bash
cd backend
pnpm install
pnpm dev:api
```

O backend estará disponível em:
📍 http://localhost:3333

### 🌐 Frontend
```bash
cd frontend
pnpm install
pnpm dev
```

O frontend estará disponível em:
📍 http://localhost:3000

---

## 📚 Funcionalidades

### 🖥️ Interface Web
- GET /livros – lista todos os livros
- POST /livros – cadastro de novo livro
- PUT /livros/:id – edição de livro
- DELETE /livros/:id – exclusão de livro

### 🧠 Campos do livro

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| id | número | Gerado pelo banco |
| titulo | texto | ✅ |
| autor | texto | ✅ |
| preco | número (decimal) | ✅ |
| data_publicacao | texto (YYYY-MM-DD) | ✅ |
| editora | texto (opcional) | ❌ |

---

## 🗃️ Organização do projeto

```
/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── livro.ts
│   │   │   ├── database.ts
│   │   │   └── schema.sql
│   │   └── http.ts
│   │   └── server.ts
│   └── livros.db
├── frontend/
│   └── app/
│       ├── page.tsx
│       └── livros/
│           ├── page.tsx
│           ├── novo/page.tsx
│           └── [id]/editar/page.tsx
```

---

## 🛡️ Segurança e organização

- Uso de `.env` para configuração de porta e base URL
- CORS restrito ao frontend (`http://localhost:3000`)
- .gitignore configurado para ocultar:
  - `.env`, `.env.local`
  - `node_modules/`, `dist/`
  - `*.db`, `*.log`

---

## 📝 Observações finais

- A interface de linha de comando (server.ts) foi mantida, mas o foco foi migrado para uma aplicação moderna com frontend visual.  
  Para rodar aplicação somente no console:
  ```bash
  cd backend
  pnpm install
  pnpm dev
  ```
- A aplicação pode ser facilmente estendida com testes, Docker, ou deployed na Vercel e Render.
