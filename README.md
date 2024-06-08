# Meu Projeto de API

Este é um projeto de API que oferece rotas para registro de usuários, login e listagem de usuários cadastrados.

## Funcionalidades

- **/registro**: Rota para registrar novos usuários.
- **/login**: Rota para login de usuários existentes.
- **/users**: Rota para listar todos os usuários cadastrados (necessário enviar o token de autenticação via Bearer).

## Pré-requisitos

- Node.js
- npm

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/XPROGRAMING/auth-api-bcrypt.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd auth-api-bcrypt
    ```
3. Instale as dependências:
    ```bash
    npm i
    ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```bash
npm run dev

------------------------------------------------------------------------
Uso das Rotas

Registro
Endpoint: /registro
Método: POST
Descrição: Registra um novo usuário.
Exemplo de Requisição:

{
  "usuario":"teste",
  "nome":"testando",
  "email":"testando123@teste.com",
  "senha":"teste123"
}

------------------------------------------------------------------------
Login
Endpoint: /login
Método: POST
Descrição: Realiza o login de um usuário.
Exemplo de Requisição:

{
    "email": "testando123@teste.com",
    "senha": "teste123"
}

------------------------------------------------------------------------
Listar Usuários
Endpoint: /users
Método: GET
Descrição: Lista todos os usuários cadastrados no banco de dados.
Autenticação: Requer envio do token recebido no endpoint /login via Bearer Token.














