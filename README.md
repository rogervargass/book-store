# API Rest de Livraria

Bem-vindo ao projeto da API Rest de Livraria! Essa API permite que você gerencie
livros, autores e editoras através de operações de adição, listagem, exclusão e
atualização. Foi construída utilizando Node.js, Express e MongoDB para fornecer
uma plataforma eficiente e flexível de gerenciamento de informações relacionadas
a livros.

## Funcionalidades

A API possui as seguintes funcionalidades:

- **Livros:**

  - Adicionar um novo livro com título, autor, editora e número de páginas.
  - Listar todos os livros disponíveis.
  - Listar um livro pelo \_id.
  - Atualizar informações de um livro existente.
  - Excluir um livro do banco de dados.

- **Autores:**

  - Adicionar um novo autor com nome e nacionalidade.
  - Listar todos os autores registrados.
  - Listar um autor pelo \_id.
  - Atualizar informações de um autor existente.
  - Excluir um autor do banco de dados.

- **Editoras:**
  - Adicionar uma nova editora com nome.
  - Listar todas as editoras cadastradas.
  - Listar uma editora pelo \_id.
  - Atualizar informações de uma editora existente.
  - Excluir uma editora do banco de dados.

## Configuração do Projeto

Para executar localmente este projeto, siga os passos abaixo:

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
   ```

2. **Instalar Dependências:** Navegue até o diretório do projeto e execute o
   seguinte comando para instalar as dependências necessárias:

   ```bash
   npm install
   ```

3. **Configurar o .ENV:** Certifique-se de ter o MongoDB instalado localmente ou
   configure uma conexão remota. Edite o arquivo `.env` com as informações da
   sua conexão MongoDB:

   ```env
   PORT=default-3000
   MONGODB_URI=sua-url-de-conexao
   ```

4. **Iniciar o Servidor:** Inicie o servidor Express com o seguinte comando:
   ```bash
   npm run dev
   ```

Agora você deve ser capaz de acessar a API em `http://localhost:3000` (ou a
porta que você configurou).

## Endpoints da API

- **Livros:**

  - `GET /books`: Retorna todos os livros.
  - `GET /books/:id`: Retorna um livro pelo seu ID.
  - `POST /books`: Adiciona um novo livro.
  - `PUT /books/:id`: Atualiza informações de um livro existente.
  - `DELETE /books/:id`: Exclui um livro.

- **Autores:**

  - `GET /authors`: Retorna todos os autores.
  - `GET /authors/:id`: Retorna um autor pelo seu ID.
  - `POST /authors`: Adiciona um novo autor.
  - `PUT /authors/:id`: Atualiza informações de um autor existente.
  - `DELETE /authors/:id`: Exclui um autor.

- **Editoras:**
  - `GET /publishers`: Retorna todas as editoras.
  - `GET /publishers/:id`: Retorna uma editora pelo seu ID.
  - `POST /publishers`: Adiciona uma nova editora.
  - `PUT /publishers/:id`: Atualiza informações de uma editora existente.
  - `DELETE /publishers/:id`: Exclui uma editora.

## Contribuição

Contribuições são bem-vindas! Se você encontrou algum problema ou deseja
adicionar melhorias, sinta-se à vontade para abrir uma _issue_ ou enviar um
_pull request_.

---

Divirta-se explorando e utilizando a API Rest de Livraria! Em caso de dúvidas,
não hesite em entrar em contato.
