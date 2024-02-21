# Architecture Hexagonal Node

This project contains a minimal starter for Node.js project with Typescript, ESLint, TS-Standard already configured

## 💻 Prerequisites

- [Git Bash](https://www.git-scm.com/downloads) or [WSL Linux con ZSH](https://dev.to/equiman/zsh-on-windows-with-wsl-1jck)
- **Node.js 18+**, use with [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- Use [pnpm](https://pnpm.io/installation)
- [Docker Deskptop](https://www.docker.com/products/docker-desktop)

## 📖 How to use

- 👨‍💻 Install deps and run App

```bash
pnpm install
pnpm deps
pnpm dev
```
> ⚠️ Important: Copy the `.env.example` file to `.env.dev` and fill in the required environment variables.

- 🚀 Build App

```bash
pnpm build
```

- 🚀 Start App

```bash
pnpm start
```

- 🔦 Run Lint

```bash
pnpm lint
```

- 👾 Run test

```bash
pnpm test
```

## ⚙ Configuration Variables `.env`

The environment variables are obtained from 3 different files depending on the environment in which the app is running o deployed (dev, qa, prod).

| Enviroment | File      |
| ---------- | --------- |
| dev        | .env.dev  |
| qa         | .env.qa   |
| prod       | .env |
