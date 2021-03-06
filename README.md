<h1 align="center">
  <img alt="system_votes" src="" width="120px" />
</h1>


![Captura de tela de 2022-05-27 16-27-38](https://user-images.githubusercontent.com/57969262/170777649-b6592d9a-f910-4d79-a0f6-e02d7d8e7f11.png)

<h3 align="center">
  Sistema de Votação
</h3>

<p align="center">Nesse projeto desenvolvido com Nodejs e React, tem a função de criar enquetes e fazendo contagens de votos persistindo no banco de dados postgres utilizando o knexJs para abstrair os dados</p>

## 🚀 Tecnologias

- ⚡ Express
- 💾 KnexJs
- ⚛️ React

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Npm](https://docs.npmjs.com/getting-started)

## 🔥 Instalação e execução do Backend

1. Faça um clone desse repositório;
2. Entre na pasta `cd system_vote/backend`;
3. Rode `npm` para instalar as dependências;
4. Altere as credencias dentro de `backend/Knexfile.js`;
5. Crie um banco de dados com o mesmo nome com a do repositório;
6. Rode `npx migrate:latest seed:run` para executar as migrations e os seed;
7. Rode `npm start` para iniciar o servidor;

## ⚡️  Instalação e execução do FrontEnd

1. Entre na pasta `cd system_vote/frontend`;
2. Rode `npm` para instalar as dependências;
3. Rode `npm start` para iniciar;
