# Barbearia API

API REST desenvolvida com NestJS, Prisma e PostgreSQL para gerenciamento de barbearia.

## Descrição

API backend para sistema de gerenciamento de barbearia com funcionalidades de cadastro de clientes.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

## Instalação

```bash
npm install
```

## Configuração

1. Configure as variáveis de ambiente no arquivo `.env`:
```
DATABASE_URL="postgresql://usuario:senha@localhost:5432/barbearia_db"
PORT=3000
```

2. Execute as migrações do Prisma:
```bash
npx prisma migrate dev
```

## Executar o projeto

```bash
# desenvolvimento
npm run start

# modo watch
npm run start:dev

# produção
npm run start:prod
```

## Rotas da API

- `GET /` - Rota principal
- `GET /clientes` - Listar todos os clientes
- `POST /clientes` - Criar novo cliente

## Tecnologias

- NestJS
- Prisma
- PostgreSQL
- TypeScript

## Licença

MIT
