const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  projectId: '9yv4dp',
  viewportHeight: 768,
  viewportWidth: 1366,
  idClient: process.env.CYPRESS_ID_CLIENT || '',
  user: process.env.CYPRESS_USER || '',
  senha: process.env.CYPRESS_SENHA || '',

  e2e: {
    baseUrl: 'http://10.54.1.19/novoim.gigroup.com.br/index.php',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: "cypress/e2e/integrations/**/*.feature"
  },
});
