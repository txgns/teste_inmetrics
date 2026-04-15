/* global Given, Then, When, And */

import Contexto from '../../Web/pageobjects/Contexto'
const contexto = new Contexto

Given("que acesso a URL", () => {
    contexto.acessarSite();
})

Given("que estou na tela principal do sistema", () => {
    contexto.fazerLogin();
    cy.wait(2000);
})

When("executo o extrator de elementos da pagina {string}", (nomePagina) => {
    cy.extrairElementos(nomePagina);
    cy.wait(2000);
})

When("executo o extrator para o elemento {string}", (seletor) => {
    cy.extrairElemento(seletor);
    cy.wait(2000);
})
