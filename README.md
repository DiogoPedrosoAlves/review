# EXERCÍCIO DE PRÁTICA — NEXT.JS

---

## CASE: Minha lista de produtos favoritos

Você é responsável por desenvolver um sistema no qual um usuário possa consultar produtos de uma loja virtual fictícia e salvar seus produtos favoritos para consultar posteriormente.

O sistema deverá possuir autenticação, busca de produtos e uma área para gerenciar os favoritos do usuário.

A aplicação deverá ser desenvolvida utilizando **Next.js com App Router e TypeScript**. A estilização poderá ser feita com CSS puro ou Tailwind CSS.

Para consultar os produtos, será utilizada a API pública DummyJSON.

### API utilizada

**Documentação:** <https://dummyjson.com/docs/products>

**URL base:** `https://dummyjson.com/products`

**Método:** GET

#### Listar produtos

Utilize o endpoint abaixo para carregar a lista inicial de produtos:

`https://dummyjson.com/products?limit=15`

#### Buscar produtos

Utilize o endpoint abaixo para pesquisar produtos:

`https://dummyjson.com/products/search?q=phone&limit=15`

O parâmetro `q` representa o texto pesquisado. Substitua `phone` pelo texto digitado pelo usuário.

O parâmetro `limit` define a quantidade máxima de produtos retornados. A API também aceita o parâmetro `skip`, que permite avançar os resultados para implementar paginação, caso desejado.

A resposta da API contém uma propriedade `products`, que é um array de produtos, além de informações como `total`, `skip` e `limit`.

### Dados dos produtos

Na listagem, utilize os seguintes campos retornados pela API:

- `id`: identificador do produto.
- `title`: nome do produto.
- `thumbnail`: imagem de apresentação do produto.
- `category`: categoria do produto.
- `price`: preço do produto.
- `rating`: avaliação do produto.
- `stock`: quantidade disponível em estoque.

Os produtos também possuem outras informações, que poderão ser utilizadas na página de detalhes.

---

## CRITÉRIOS DE AVALIAÇÃO

### 1. Organização do projeto

- Estrutura de pastas e arquivos organizada.
- Criação e utilização correta das interfaces ou dos tipos TypeScript para representar os dados da API.
- O projeto deverá utilizar App Router. O uso da estrutura `pages` acarretará penalidade de 50% da pontuação.
- Os arquivos listados no `.gitignore` não deverão ser entregues. O próprio arquivo `.gitignore` deverá estar presente. A entrega de arquivos ignorados acarretará penalidade de 50% da pontuação.

### 2. Login e autenticação

- Criar uma página de login com campos de usuário e senha.
- Criar uma rota de autenticação utilizando Route Handler do Next.js, validando a senha informada contra uma senha fixa armazenada em uma variável de ambiente.
- Implementar tratamento de erros e redirecionamento para a área autenticada após o login. O usuário deverá continuar autenticado ao atualizar a página.

Para esta atividade, não é necessário integrar um banco de dados ou implementar cadastro de usuários.

A senha deverá ser definida no arquivo `.env.local`, utilizando uma variável de ambiente sensível, por exemplo, `APP_PASSWORD`.

Não exponha essa variável em componentes executados no navegador. A autenticação deverá ser validada no servidor.

### 3. Tela de busca de produtos

- Após o login, exibir uma tela com um campo de busca e uma lista inicial de produtos carregada por meio de uma requisição GET à DummyJSON. Cada produto deverá exibir nome, imagem, categoria, preço, avaliação e estoque.
- A listagem deverá apresentar, no máximo, 15 produtos por requisição.
- Ao digitar no campo de busca, a aplicação deverá consultar a API e atualizar os resultados de acordo com o texto informado, mantendo o limite de 15 produtos.

A tela deverá apresentar estados adequados para carregamento, ausência de resultados e falha na comunicação com a API.

### 4. Favoritando produtos

- Implementar um botão para adicionar ou remover um produto dos favoritos.
- Salvar os favoritos no `localStorage`, mantendo-os disponíveis após atualizar a página.
- Disponibilizar um botão de logout na parte superior da tela. Ao deslogar, os favoritos armazenados deverão ser limpos.

O sistema deverá permitir identificar visualmente quais produtos já estão favoritados.

### 5. Deploy na Vercel

- Publicar o projeto em um repositório Git e realizar o deploy na Vercel.
- Inserir no arquivo `README.md` o link público da aplicação.
- Configurar as variáveis de ambiente necessárias no ambiente de produção, além de mantê-las corretamente configuradas no ambiente local.

O link da aplicação deverá permitir acessar o projeto publicado.

---

## EXTRA

- Criar uma página de detalhes do produto, acessível ao clicar em um produto da listagem, exibindo informações adicionais, como descrição, marca, desconto, política de devolução ou outras propriedades disponíveis na API.
- Permitir adicionar ou remover o produto dos favoritos diretamente na página de detalhes.

---

## DICAS E MATERIAIS DE APOIO

**Documentação da DummyJSON:**

<https://dummyjson.com/docs/products>

**Fetch API:**

<https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch>

**Next.js — App Router:**

<https://nextjs.org/docs/app>

**Next.js — Route Handlers:**

<https://nextjs.org/docs/app/getting-started/route-handlers>

**Next.js — Variáveis de ambiente:**

<https://nextjs.org/docs/app/guides/environment-variables>

**Deploy na Vercel:**

<https://vercel.com/docs>

**Atenção:** os favoritos deverão ser armazenados no navegador, e não na DummyJSON. A API é utilizada apenas para consulta dos dados dos produtos.

Boa prática!

## Link da Vercel

<https://fiap-review-next.vercel.app/>
