# Authentication Completo

Este é um projeto completo de autenticação de usuários. Nele, o usuário pode se registrar, realizar login e logout a qualquer momento. Após a autenticação, o sistema garante o controle de acesso, permitindo que apenas usuários autenticados tenham permissão para acessar determinadas rotas.

Os dados dos usuários são armazenados em um banco de dados PostgreSQL, com as senhas protegidas por criptografia utilizando a biblioteca BcryptJS. A aplicação também está protegida contra ataques de SQL Injection graças ao uso do ORM Sequelize, que realiza o tratamento automático das consultas ao banco de dados.

## 🚀 Tecnologias usadas

### back-end
- Node.js / Express.Js
- PostgreSQL, ORM Sequelize
- Express-session, express-flash, chalk

### front-end
- Handlebars
- CSS

## Funcionalidades

- Registro de novos usuários com validação de senha
- Login com sessão persistente
- Logout
- Proteção de rotas (somente usuários autenticados acessam determinadas páginas)
- Criptografia de senhas com BcryptJS
- Proteção contra SQL Injection com Sequelize
- Feedback ao usuário com mensagens flash

## Requisitos

- Node.js (versão 20 ou superior)
- PostgreSQL instalado


## 🛠️ Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/GustavoCawthon8/account-authentication

# Instale as dependências
npm install

# Rode o projeto
npm start
```
