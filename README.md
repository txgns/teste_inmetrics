# Automação da plataforma Novo IM (GiGroup) com Cypress

Projeto de automação de testes end-to-end e de API para a plataforma **Novo IM** (`novoim.gigroup.com.br`), utilizando **Cypress** com **Cucumber** (BDD) para escrita dos cenários em Gherkin.

## Stack

- [Cypress](https://www.cypress.io/) 15.x — execução dos testes
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor) — suporte a `.feature` / Gherkin
- [dotenv](https://www.npmjs.com/package/dotenv) — carregamento de variáveis de ambiente
- Node.js

## Estrutura do projeto

```
teste_automacao/
├── cypress/
│   ├── e2e/
│   │   ├── helper/                 # utilitários compartilhados
│   │   └── integrations/
│   │       ├── API/                # testes de API (features + steps)
│   │       ├── Web/                # testes Web
│   │       │   ├── features/       # cenários .feature (Gherkin)
│   │       │   ├── pageobjects/    # Page Objects
│   │       │   ├── steps/          # step definitions
│   │       │   └── elements/       # mapeamento de elementos
│   │       └── Helper/             # extrator de elementos da página
│   ├── fixtures/                   # massa de dados
│   ├── downloads/ screenshots/ videos/
│   └── support/                    # comandos e hooks globais
├── cypress.config.js
├── package.json
└── .env                            # credenciais e variáveis (não versionado)
```

Cenários atualmente cobertos: `login.feature` e `contratos_im.feature` (área Web).

## Pré-requisitos

É necessário ter o **Node.js** instalado. Caso esteja em um ambiente Windows, basta acessar o site do Node.js e baixar a última versão LTS.

[Link Node.js](https://nodejs.org/pt)

Após a instalação, pode verificar a versão com o comando:

```
node --version
```

Caso esteja em um ambiente **Linux**, siga os passos abaixo.

No terminal, digite o comando de instalação do curl:

```
sudo apt-get install curl
```

Em seguida, execute o script abaixo para adicionar o repositório do Node:

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

E por fim, para instalar o Node execute:

```
sudo apt-get install -y nodejs
```

Também é preciso ter o **Git** instalado. Caso ainda não tenha, siga os passos nesse [Link](https://git-scm.com/book/pt-br/v2/Começando-Instalando-o-Git).

## Instalando as dependências

Após realizar o clone do repositório, acesse o diretório do projeto e execute:

```
npm install
```

Todas as dependências do projeto (incluindo Cypress e o preprocessor do Cucumber) serão instaladas conforme o `package.json`.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as credenciais usadas pelos testes:

```
CYPRESS_ID_CLIENT=<id do cliente>
CYPRESS_USER=<usuário>
CYPRESS_SENHA=<senha>
```

Essas variáveis são carregadas em [cypress.config.js](cypress.config.js) via `dotenv` e ficam disponíveis em `Cypress.config()`. O arquivo `.env` está listado no [.gitignore](.gitignore) e **não deve ser versionado**.

## Executando os testes

Execução headless no Chrome (CLI), exibindo os resultados linha a linha:

```
npm run test:chrome
```

Execução gravando no Cypress Cloud (necessário record key válido):

```
npm run test:panel
```

Para abrir a interface gráfica do Cypress e acompanhar a execução visualmente:

```
npx cypress open
```

## Padrão de escrita dos testes

- Features em **Gherkin** (`.feature`) ficam em `cypress/e2e/integrations/<área>/features/`.
- Step definitions correspondentes ficam em `cypress/e2e/integrations/<área>/steps/`.
- A configuração `nonGlobalStepDefinitions: false` ([cypress.config.js](cypress.config.js)) faz com que os steps sejam compartilháveis entre as features.
- A organização Web segue o padrão **Page Object**, com mapeamento de elementos isolado em `elements/`.
