/// <reference types="cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")
const user = Cypress.config("user")
const senha = Cypress.config("senha")
const idClient = Cypress.config("idClient")

class LoginPage {

    acessarSite() {
        cy.visit(url)
    }

   
    preencherCampoID() {
        cy.get(loginElements.campoID())
            .should('be.visible')
            .type(idClient)
    }

 
    preencherCampoUser() {
        cy.get(loginElements.campoUser())
            .should('be.visible')
            .type(user)
    }

  
    preencherCampoSenha() {
        cy.get(loginElements.campoSenha())
            .should('be.visible')
            .type(senha)
    }

   
    clicarBotaoEntrar() {
        cy.get(loginElements.botaoEntrar())
            .should('be.visible')
            .click()
    }

    validarLoginSucesso() {
        cy.get(loginElements.bannerCabecalho())
            .should('be.visible')
    }

    preencherCampoIDInvalido(idInvalido) {
        if (idInvalido && idInvalido !== '') {
            cy.get(loginElements.campoID())
                .should('be.visible')
                .type(idInvalido)
        }
    }

    preencherCampoUserInvalido(userInvalido) {
        if (userInvalido && userInvalido !== '') {
            cy.get(loginElements.campoUser())
                .should('be.visible')
                .type(userInvalido)
        }
    }

    preencherCampoSenhaInvalida(senhaInvalida) {
        if (senhaInvalida && senhaInvalida !== '') {
            cy.get(loginElements.campoSenha())
                .should('be.visible')
                .type(senhaInvalida)
        }
    }

    validarMensagemErro() {
        cy.get(loginElements.mensagemErro())
            .should('be.visible')
    }

    validarLoginNaoRealizado() {
        cy.get(loginElements.bannerCabecalho())
            .should('not.exist')
    }
}

export default LoginPage;