/* global Given, Then, When, And */

import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("que acesso a URL", () => {
    loginPage.acessarSite();
})

When("preencho os campos necessarios", () => {
    loginPage.preencherCampoID();
    loginPage.preencherCampoUser();
    loginPage.preencherCampoSenha();
})

And("clico no botao entrar", () => {
    loginPage.clicarBotaoEntrar();
})

Then("valido que o login foi realizado com sucesso", () => {
    loginPage.validarLoginSucesso();
})

When("preencho o ID com {string}", (idInvalido) => {
    loginPage.preencherCampoIDInvalido(idInvalido);
})

When("preencho o usuario com {string}", (userInvalido) => {
    loginPage.preencherCampoUserInvalido(userInvalido);
})

When("preencho a senha com {string}", (senhaInvalida) => {
    loginPage.preencherCampoSenhaInvalida(senhaInvalida);
})

Then("valido que uma mensagem de erro é exibida", () => {
    loginPage.validarMensagemErro();
})

Then("valido que o login não foi realizado", () => {
    loginPage.validarLoginNaoRealizado();
})

When("deixo o campo ID vazio", () => {
    loginPage.preencherCampoIDInvalido('');
})

When("deixo o campo usuario vazio", () => {
    loginPage.preencherCampoUserInvalido('');
})

When("deixo o campo senha vazio", () => {
    loginPage.preencherCampoSenhaInvalida('');
})