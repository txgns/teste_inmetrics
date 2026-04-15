/* global Given, Then, When, And */

import ContratosImPage from '../pageobjects/ContratosImPage'
const contratosImPage = new ContratosImPage

When("acesso o menu de contratos", () => {
    contratosImPage.acessarMenuContratos();
})

Then("valido que estou na tela de contratos", () => {
    contratosImPage.validarTelaContratos();
})

When("clico no botao de cadastro", () => {
    contratosImPage.clicarBotaoCadastro();
})

Then("valido que a tela de cadastro foi aberta", () => {
    contratosImPage.validarTelaCadastro();
})

When("clico no botao de cadastro individual", () => {
    contratosImPage.clicarBotaoCadastroIndividual();
})

Then("valido que a tela de cadastro individual foi aberta", () => {
    contratosImPage.validarTelaCadastroIndividual();
})
