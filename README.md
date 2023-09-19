![api conexão](https://github.com/Danifeares/desafio-backend-m03-b2bt05/assets/117787402/5f720ab6-7395-494d-85c4-1bbf9bc84cc4)

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
   - [Login do Usuário](#login-do-usuário)<a name="retornar-ao-indice"></a>
   - [Detalhar Usuário](#detalhar-usuário)<a name="retornar-ao-indice"></a>
   - [Atualizar Usuário](#atualizar-usuário)<a name="retornar-ao-indice"></a>
   - [Listar Categorias](#listar-categorias)<a name="retornar-ao-indice"></a>
   - [Listar Transações do Usuário Logado](#listar-transações-do-usuário-logado)<a name="retornar-ao-indice"></a>
   - [Detalhar Uma Transação do Usuário Logado](#detalhar-uma-transação-do-usuário-logado)<a name="retornar-ao-indice"></a>
   - [Cadastrar Transação para o Usuário Logado](#cadastrar-transação-para-o-usuário-logado)<a name="retornar-ao-indice"></a>
   - [Atualizar Transação do Usuário Logado](#atualizar-transação-do-usuário-logado)<a name="retornar-ao-indice"></a>
   - [Excluir Transação do Usuário Logado](#excluir-transação-do-usuário-logado)<a name="retornar-ao-indice"></a>
   - [Obter Extrato de Transações](#obter-extrato-de-transações)<a name="retornar-ao-indice"></a>

---

## Cadastrar Usuário <a name="cadastrar-usuário"></a>
Por meio da rota `POST`: http://localhost:3000/usuario
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Login de usuário <a name="login-do-usuário"></a>
Por meio da rota `POST`: http://localhost:3000/login
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## A partir daqui, todos os endpoints serão protegidos por token de autenticação, obtido como resposta na rota de login.

## Detalhar usuário <a name="detalhar-usuário"></a>
Por meio da rota `GET`: http://localhost:3000/usuario
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Atualizar usuário <a name="atualizar-usuário"></a>
Por meio da rota `PUT`: http://localhost:3000/usuario
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Listar categorias <a name="listar-categorias"></a>
Por meio da rota `GET`: http://localhost:3000/categoria
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Listar Transações do Usuário Logado <a name="listar-transações-do-usuário-logado"></a>
Por meio da rota `GET`: http://localhost:3000/transacao </br>
Essa rota pode receber como parâmetros query (opcional) filtros de categorias, para listagem de transações por categorias.
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Detalhar Uma Transação do Usuário Logado <a name="detalhar-uma-transação-do-usuário-logado"></a>
Por meio da rota `GET`: http://localhost:3000/transacao/:id
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Cadastrar Transação para o Usuário Logado <a name="cadastrar-transação-para-o-usuário-logado"></a>
Por meio da rota `POST`: http://localhost:3000/transacao
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Atualizar Transação do Usuário Logado <a name="atualizar-transação-do-usuário-logado"></a>
Por meio da rota `PUT`: http://localhost:3000/transacao/:id
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Excluir Transação do Usuário Logado <a name="excluir-transação-do-usuário-logado"></a>
Por meio da rota `DELETE`: http://localhost:3000/transacao/:id
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)


## Obter Extrato de Transações <a name="obter-extrato-de-transações"></a>
Por meio da rota `GET`: http://localhost:3000/extrato
`inserir gif`
#### [Retornar ao índice](#retornar-ao-indice)

---

## 👩🏻‍💻 Desenvolvedoras: 

- **Arianna Silveira Santos** [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/AriannaSilveira)

- **Daniela Felipe Soares** [![GitHub](https://img.shields.io/badge/GitHub-Profile-blue?logo=github)](https://github.com/Danifeares)


###### tags: `back-end` `módulo 3` `nodeJS` `PostgreSQL` `API REST` `desafio`
