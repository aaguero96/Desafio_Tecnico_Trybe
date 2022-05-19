# Bem vindo a minha solução do desafio Técnico proposto pela Trybe

## Explicação do Projeto

<details>
  <summary>
    <strong>Data de entrega proposta</strong>
  </summary>

  - A data de entrega proposta para avaliação final do projeto é: `20-Maio-2022 14:00`;
  - Mudanças acima dessa data não serão aceitas pela equipe de avaliação.
</details>

<details>
  <summary>
    <strong>Contexto do projeto</strong>
  </summary>

  <p>
    A empresa <strong>Ebytr</strong> está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.
  </p>
  <p>
    Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
  </p>
  <p>
    <strong>Na Ebytr o time de desenvolvimento utiliza a Stack MySQL, Express, React e Node para criar suas aplicações.</strong> Foi combinado com a <strong>Ebytr</strong> que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.
  </p>
</details>

<details>
  <summary>
    <strong>Requisitos Técnicos</strong>
  </summary>

  - Front-End em <strong>React</strong>;
  - Back-End em <strong>NodeJS</strong>, com <strong>MySQL</strong>;
  - Arquitetura em <strong>camadas</strong>.
</details>

<details>
  <summary>
    <strong>Funcionalidades</strong>
  </summary>

  1. Visualizar lista de tarefas
  - Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status.
  2. Inserir uma nova tarefa na lista;
  3. Remover uma tarefa da lista;
  4. Atualizar uma tarefa da lista;
  5. A tarefa deve possuir um status editável: pendente, em andamento ou pronto.
</details>

<details>
  <summary>
    <strong>Critérios de avaliação</strong>
  </summary>

  O time de avaliadores irá avaliar a entrega olhando, principalmente, para os itens abaixo:

  1. Atendimento aos requisitos técnicos e funcionais;
  2. Seu projeto deve rodar sem erros;
  3. Entendimento dos conceitos das camadas adotadas;
  4. Código e componentes reutilizados;
  5. Habilidade em escrever testes (mínimo 30% de cobertura);
  6. Boa legibilidade do código;
  7. Separação do front e backend;
  8. Mensagens de commits bem descritas e commits com um escopo nítido;
  9. Referências de códigos de terceiros;
  10. Instruções nítidas no README do projeto para setup e execução da aplicação e dos testes.
</details>

<details>
  <summary>
    <strong>Dicas dadas</strong>
  </summary>

  1. Ter uma boa cobertura de testes Front e Back;
  2. Aplicar boas práticas de escrita de código;
  3. Documentação do projeto (README), que inclua:
  - Passo a passo para instalar e executar o projeto. Incluindo instruções especiais para instalar dependências e/ou bancos de dados, se houver;
  - Endereço da aplicação no Heroku, se houver (ou outro serviço de deployment).
  4. Ter um linter configurado;
  5. O projeto deverá ser entregue via repositório pessoal no GitHub (utilizar boas práticas de criação/nomeação de branches, além de mensagens de commits bem descritas e commits com um escopo nítido).
</details>

## Planejamento da solução

### BackEnd

<details>
  <summary>
    <strong>1. Iniciando npm</strong>
  </summary>

  1. `npm init -y`;
  2. Instalando dependências;
  - express
  - dotenv
  - http-status-codes
  - sequelize
  - sequelize-cli
  - mysql2
  - nodemon
  3. Intalando dependências de desenvolimento.
  - eslint
  - @types/express
  - @tsconfig/node14
  - @types/node
</details>

<details>
  <summary>
    <strong>2. Iniciando Lint</strong>
  </summary>

  1. `npx eslint --init`.
  2. Adicionar arquivo `.eslintignore`.
</details>

<details>
  <summary>
    <strong>3. Iniciando o sequelize</strong>
  </summary>

  1. `npx sequelize-cli init`.
</details>

<details>
  <summary>
    <strong>4. Configurando typescript</strong>
  </summary>

  1. Adicionar arquivo `tsconfig.json` na raiz da pasta BackEnd, indicando a raiz do diretório de saída e de entrada;
  2. Adicionar pasta `src`, que irá conter as principais informações do projeto;
  3. Adicionar pasta `build` que irá buildar o src;
  4. Adicionar o arquivo `.env` na raiz do projeto, e colocar informações sensiveis lá;
  5. Dentro do arquivo `tsconfig.json` colocar um nome para sua base de dados, a ser criada ou já criada;
  6. Excluir `config.json`.
</details>

<details>
  <summary>
    <strong>5. Configurando sequelize</strong>
  </summary>

  1. Adicionar pasta `database` dentro da pasta src;
  2. Adicionar os arquivos do sequelize init dentro da pasta `src/database`;
  3. Adicionar arquivo `.sequelizerc` na raiz da pasta BackEnd, indicando onde estará o enderaçamento;
</details>

<details>
  <summary>
    <strong>6. Criando Migrations</strong>
  </summary>

  1. Usar o comando `npx sequelize migration:generate --name create-table-tasks` para criar uma migration;
  2. Criar a tabela Task a partir dessa migration;
  - Tabela Task deve conter as colunas:
    - id (primary key, auto-increment-integer);
    - task (not null, string);
    - createdAt (not null, date)
    - status (not null, default: "Em andamento", string).
</details>

<details>
  <summary>
    <strong>7. Criando Seeders</strong>
  </summary>

  1. Usar o comando `npx sequelize seed:generate --name tasks` para criar um seeder;
  2. Popular a tabela Tasks:
  - ('Limpar a mesa', 'pronto');
  - ('Limpar a cozinha', 'em andamento');
  - ('Concluir tarefa de casa', 'pendente');
  - Todas as tarefas estarão com tempo corrente.
</details>

<details>
  <summary>
    <strong>8. Configurando Index do Model</strong>
  </summary>

  1. Substituir `index.js` para `index.ts` na pasta models;
  2. Iniciar o sequelize dentro desse arquivo.
</details>

<details>
  <summary>
    <strong>9. Criando Task Model</strong>
  </summary>

  1. Criar arquivo `TaskModel.ts` dentro da pasta `database/models`;
  2. Configurar o model de acordo com o banco de dados.
</details>

<details>
  <summary>
    <strong>9. Criando Task Service</strong>
  </summary>

  1. Criar a pasta `services` em `database`;
  2. Criar arquivo `TaskService.ts` dentro da pasta `database/services`.
</details>

<details>
  <summary>
    <strong>10. Criando Task Controller</strong>
  </summary>

  1. Criar a pasta `controllers` em `database`;
  2. Criar arquivo `TaskController.ts` dentro da pasta `database/services`.
</details>

<details>
  <summary>
    <strong>11. Propriedade getAll</strong>
  </summary>

  1. Criar propriedade `getAll` dentro da classe `TaskService`, ela será capaz de visaulizar todos os dados dentro da tabela `Tasks`;
  2. Criar propriedade `getAll` dentro da classe `TaskController`;
</details>

<details>
  <summary>
    <strong>12. Criando App</strong>
  </summary>

  1. Criar arquivo `app.ts` dentro da pasta `src`, esse arquivo terá a classe App capaz de inicar as rotas escolhidas.
</details>

<details>
  <summary>
    <strong>13. Criando Server</strong>
  </summary>

  1. Criar arquivo `server.ts` dentro da pasta `src`, esse arquivo será capaz de inicializar o App.
</details>

<details>
  <summary>
    <strong>14. Criando endpoint `/tasks`</strong>
  </summary>

  1. Esse endpoint será do tipo `GET`;
  2. Esse endpoint disponibilizara a propriedade getAll criada anteriormente;
  3. Deverá ser retornado um status 200;
  4. Deverá ser retornado um json com todas os valores do banco de dados.
</details>

<details>
  <summary>
    <strong>15. Criando `npm run database:up`</strong>
  </summary>

  1. Será criado essa rota no npm, dentro do `package.json` em `scripts`;
  2. Será capaz de iniciar o banco de dados com o migration e os seeders.
</details>

<details>
  <summary>
    <strong>16. Criando `npm run database:down`</strong>
  </summary>

  1. Será criado essa rota no npm, dentro do `package.json` em `scripts`;
  2. Será capaz de deletar o banco de dados com o migration.
</details>

<details>
  <summary>
    <strong>17. Criando `npm run start:local`</strong>
  </summary>

  1. Será criado essa rota no npm, dentro do `package.json` em `scripts`;
  2. Será capaz de inicar em localhost/3003 com o nodemon;
</details>

<details>
  <summary>
    <strong>18. Criando endpoint `/tasks/:filter`</strong>
  </summary>

  1. Esse endpoint será do tipo `GET`;
  2. Esse endpoint será capaz de filtrar a tabela dados pelo nome da tarefa;
  3. Deverá ser retornado um status 200;
  4. Deverá ser retornado um json com todas os valores do banco de dados após o filtro;
  5. O `filter` passado como `params` deve ser capaz de encontrar algum elemento, caso o contrário, será retornado um status 404, com uma json contendo a propriedade `message: 'This taskName doesnt exist'`.
</details>