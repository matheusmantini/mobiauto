<h1 align="center"> Projeto + Exercícios - Mobiauto </h1>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NextJS](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Redux](https://img.shields.io/badge/-Redux-black?style=flat-square&logo=redux)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)

# Exercícios

| Exercício | Descrição                                                               | Link                                         |
| --------- | ----------------------------------------------------------------------- | -------------------------------------------- |
| 1         | Mascarar uma String (`maskify`)                                         | [Ver solução](./exercicios/1/exercicio-1.md) |
| 2         | Atualizar Objeto (`updateData`)                                         | [Ver solução](./exercicios/2/exercicio-2.md) |
| 3         | Buscar Personagens de Rick and Morty (`getRickAndMortyCharacters`)      | [Ver solução](./exercicios/3/exercicio-3.md) |
| 4         | Verificar Primeira Letra Maiúscula (`checkIfTheFirstLetterIsUppercase`) | [Ver solução](./exercicios/4/exercicio-4.md) |

# Projeto

## Overview

- Utilização de NextJS com React e Typescript, utilizando o pages router.
- Estilização com Material UI.
- Gestão de estados com Redux.
- Testes end to end com Cypress, para validar o fluxo da busca de preço por marca, modelo e ano.
- Utilização por padrão da fonte Roboto.

## Funcionalidades

- **Página Inicial de Busca (/)**

  - [x] Formulário de seleção (com autocomplete) de marca, modelo e ano de veículo para consulta na tabela fipe.

- **Página de Resultado (/resultado)**

  - [x] Mostra as informações do veículo, como marca, modelo, ano e o preço conforme tabela fipe.

## Diferenciais

- [x] Responsividade em dispositivos móveis.
- [x] Páginas customizadas dos erros: 404 e 500.
- [x] Tratamento de erros da aplicação.

## Deploy da Aplicação na vercel

> https://mobiauto-pied.vercel.app/

## Pre requisitos para rodar a aplicação:

- Node.js 18+
- npm 9+
- Git

## Overview dos Scripts:

### Inicializa o servidor de desenvolvimento

- npm run dev

### Roda build para produção

- npm run build

### Inicializa o servidor de produção

- npm start

### Aplica as regras do Eslint ao código

- npm run lint

### Abre o dashboard do Cypress para visualização dos testes e2e

- npm run cypress:open

### Roda um teste do Exercício 1

- npm run:maskify

### Roda um teste do Exercício 2

- npm run:updateData

### Roda um teste do Exercício 3

- npm run:getRickAndMortyCharacters

### Roda um teste do Exercício 4

- npm run:checkIfTheFirstLetterIsUppercase

## Como rodar a aplicação:

1. No terminal, clone o projeto:

   > git clone https://github.com/matheusmantini/mobiauto.git

2. Entre na pasta do projeto:

   > cd mobiauto

3. Copiar o arquivo '.env.example' e renomeia-lo para '.env'.

4. Adicionar o seguinte conteúdo ""https://parallelum.com.br/fipe/api/v1/carros/marcas"" na variável 'NEXT_PUBLIC_BASE_API_URL'.

5. Instale as dependências:

   > npm install

6. Execute a aplicação:

   > npm run dev

7. Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/

## Desenvolvedor

| [<img src="https://avatars.githubusercontent.com/u/71985890?v=4" width=115 > <br> <sub> Matheus Mantini </sub>](https://www.linkedin.com/in/matheusmantini/) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------: |
