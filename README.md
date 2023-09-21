![api conexão](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/5f720ab6-7395-494d-85c4-1bbf9bc84cc4)

![JavaScript](https://img.shields.io/badge/-JavaScript-yellow?style=flat&logo=javascript&logoColor=white) ![Node.js](https://img.shields.io/badge/-Node.js-green?style=flat&logo=node.js&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-blue?style=flat&logo=postgresql&logoColor=white) ![bcrypt](https://img.shields.io/badge/-bcrypt-orange?style=flat) ![jsonwebtoken](https://img.shields.io/badge/-jsonwebtoken-purple?style=flat) ![Git](https://img.shields.io/badge/-Git-black?style=flat&logo=git) ![Express.js](https://img.shields.io/badge/-Express.js-lightgray?style=flat&logo=express&logoColor=black) ![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github)


# API para Sistema Financeiro

## Descrição do Projeto

A API para Sistema Financeiro é uma aplicação que oferece recursos para gerenciar transações financeiras. Ela permite que os usuários cadastrem transações, visualizem seus extratos, filtrem transações por categoria e realizem várias outras operações relacionadas a finanças pessoais. </br>
Este projeto foi desenvolvido como desafio do módulo 3 do curso de Desenvolvimento de Software com foco em Back-end, promovido pela Cubos Academy.

## Funcionalidades

A API oferece as seguintes funcionalidades:

- Cadastro de Usuário: Permite o cadastro de novos usuários, gerando senha criptografada no banco de dados.
- Autenticação: Permite que os usuários façam login na plataforma, retornando token de autenticação para acesso das demais funcionalidades.
- Detalhamento de Perfil: Mostra os detalhes do perfil do usuário logado.
- Edição de Perfil: Permite que os usuários atualizem suas informações de perfil.
- Listagem de Categorias: Apresenta uma lista de categorias disponíveis para classificar transações.
- Listagem de Transações: Exibe todas as transações do usuário logado.
- Detalhamento de Transação: Mostra informações detalhadas de uma transação específica.
- Cadastro de Transação: Permite aos usuários cadastrar novas transações.
- Atualização de Transação: Permite a edição de transações existentes.
- Remoção de Transação: Possibilita a exclusão de transações.
- Extrato de Transações: Apresenta um resumo das transações do usuário, incluindo o saldo.
- Filtro de Transações por Categoria: Permite aos usuários filtrar transações por categoria.

## Pré-requisitos

Para executar a API, você precisará das seguintes tecnologias:

- Node.js
- PostgreSQL (Banco de Dados)
- Dependências do projeto (instaladas via `npm install`)

## Configuração

Antes de iniciar a API, siga estas etapas de configuração:

1. Clone este repositório para o seu ambiente local.

2. Configure o banco de dados PostgreSQL e crie um banco de dados chamado `dindin`.

3. Crie as tabelas necessárias no banco de dados usando os scripts SQL fornecidos no projeto, na pasta `dump.sql`.

4. Instale as dependências do projeto executando `npm install`.

5. Inicie o servidor usando `npm run dev`.
   
6. Os testes aqui disponibilizados foram realizados por meio da plataforma `Insomnia`, mas podem ser feitos pelo navegador também.

## Uso da API

A API utiliza autenticação por token. Certifique-se de incluir seu token de autenticação nas requisições para endpoints protegidos.

## Índice:
   - [Cadastrar Usuário](#cadastrar-usuário)<a name="retornar-ao-indice"></a>
   - [Login do Usuário](#login-do-usuário)
   - [Detalhar Usuário](#detalhar-usuário)
   - [Atualizar Usuário](#atualizar-usuário)
   - [Listar Categorias](#listar-categorias)
   - [Listar Transações do Usuário Logado](#listar-transações-do-usuário-logado)
   - [Detalhar Uma Transação do Usuário Logado](#detalhar-uma-transação-do-usuário-logado)
   - [Cadastrar Transação para o Usuário Logado](#cadastrar-transação-para-o-usuário-logado)
   - [Atualizar Transação do Usuário Logado](#atualizar-transação-do-usuário-logado)
   - [Excluir Transação do Usuário Logado](#excluir-transação-do-usuário-logado)
   - [Obter Extrato de Transações](#obter-extrato-de-transações)

---

## Cadastrar Usuário <a name="cadastrar-usuário"></a>
Por meio da rota `POST`: http://localhost:3000/usuario
```javascript
// Exemplo de requisição:
{
    "nome": "José",
    "email": "jose@email.com",
    "senha": "123456"
}
```
![1-cadastrar-usuario](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/411bcdd8-e7bf-4da0-b7bc-3bda9943f698)

#### [Retornar ao índice](#retornar-ao-indice)


## Login de usuário <a name="login-do-usuário"></a>
Por meio da rota `POST`: http://localhost:3000/login
```javascript
// Exemplo de requisição:
{
    "email": "jose@email.com",
    "senha": "123456"
}
```
![2-login-de-usuário](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/65488fe0-c074-4131-8e6c-7e84599f001e)

#### [Retornar ao índice](#retornar-ao-indice)


## A partir daqui, todos os endpoints serão protegidos por token de autenticação, obtido como resposta na rota de login.

## Detalhar usuário <a name="detalhar-usuário"></a>
Por meio da rota `GET`: http://localhost:3000/usuario

![3-detalhar-usuário](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/aa56ba67-35cc-46e5-8305-c14bbf5de77a)

#### [Retornar ao índice](#retornar-ao-indice)


## Atualizar usuário <a name="atualizar-usuário"></a>
Por meio da rota `PUT`: http://localhost:3000/usuario

```javascript
// exemplo de requisição:
{
    "nome": "José de Abreu",
    "email": "jose_abreu@email.com",
    "senha": "j4321"
}
```

![4-atualizar-usuario](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/c3a35109-5785-474a-873d-a894240fed16)

#### [Retornar ao índice](#retornar-ao-indice)


## Listar categorias <a name="listar-categorias"></a>
Por meio da rota `GET`: http://localhost:3000/categoria

![5-listar-categorias](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/27335c4c-c931-46a2-a2e4-9c4fcb97b0d1)

#### [Retornar ao índice](#retornar-ao-indice)


## Listar Transações do Usuário Logado <a name="listar-transações-do-usuário-logado"></a>
Por meio da rota `GET`: http://localhost:3000/transacao </br>
![6-listar-transacoes](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/911681db-b562-486d-94ca-2393b669e00f)

- **Essa rota pode receber como parâmetros query (opcional) filtros de categorias, para listagem de transações por categorias:**
![6 1-extra-filtrar-transaçoes](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/09e8c4ab-c062-4c80-b180-9e8e50fbedc8)


#### [Retornar ao índice](#retornar-ao-indice)


## Detalhar Uma Transação do Usuário Logado <a name="detalhar-uma-transação-do-usuário-logado"></a>
Por meio da rota `GET`: http://localhost:3000/transacao/:id

![7-detalhar-transacao](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/b311830e-0f1a-4aaa-aaaf-60e6054d5aea)
#### [Retornar ao índice](#retornar-ao-indice)


## Cadastrar Transação para o Usuário Logado <a name="cadastrar-transação-para-o-usuário-logado"></a>
Por meio da rota `POST`: http://localhost:3000/transacao
```javascript
// exemplo de requisição:
{
    "tipo": "entrada",
    "descricao": "Salário",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "categoria_id": 6
}
```
![8-cadastrar-transações](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/9e9f3502-3dae-48ca-af46-1235c0e9f4eb)

#### [Retornar ao índice](#retornar-ao-indice)


## Atualizar Transação do Usuário Logado <a name="atualizar-transação-do-usuário-logado"></a>
Por meio da rota `PUT`: http://localhost:3000/transacao/:id
```javascript
// exemplo de requisição:
{
    "tipo": "saida",
    "descricao": "Compras do mercado",
    "valor": 300000,
    "data": "2022-03-24T15:30:00.000Z",
    "categoria_id": 4
}
```
![9-atualizar-transacao](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/7f3a8442-3410-406b-afc2-f4849fa7ab84)

#### [Retornar ao índice](#retornar-ao-indice)


## Excluir Transação do Usuário Logado <a name="excluir-transação-do-usuário-logado"></a>
Por meio da rota `DELETE`: http://localhost:3000/transacao/:id
![10-excluir-transacao](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/157fc0b9-6cee-4b98-8943-a1d4e63523aa)

#### [Retornar ao índice](#retornar-ao-indice)


## Obter Extrato de Transações <a name="obter-extrato-de-transações"></a>
Por meio da rota `GET`: http://localhost:3000/extrato
![11-extrato-de-transacoes](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/41c0368d-a206-4f0c-8e31-1837704c4b84)

#### [Retornar ao índice](#retornar-ao-indice)

---

## 👩🏻‍💻 Desenvolvedoras: 

- **Arianna Silveira Santos** [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/AriannaSilveira)

- **Daniela Felipe Soares** [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/Danifeares)


###### tags: `back-end` `módulo 3` `nodeJS` `PostgreSQL` `API REST` `desafio`
