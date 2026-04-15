/// <reference types="cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config('baseUrl')
const user = Cypress.config('user')
const senha = Cypress.config('senha')
const idClient = Cypress.config('idClient')

class Contexto {
    acessarSite() {
        cy.visit(url)
    }

    fazerLogin() {
        cy.visit(url)
        cy.get(loginElements.campoID()).should('be.visible').type(idClient)
        cy.get(loginElements.campoUser()).should('be.visible').type(user)
        cy.get(loginElements.campoSenha()).should('be.visible').type(senha)
        cy.get(loginElements.botaoEntrar()).should('be.visible').click()
        cy.get(loginElements.bannerCabecalho()).should('be.visible')
    }
}

export default Contexto;