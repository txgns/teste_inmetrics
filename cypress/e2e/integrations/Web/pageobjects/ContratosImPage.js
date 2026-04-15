/// <reference types="cypress" />

import ContratosImElements from '../elements/ContratosImElements'
const contratosImElements = new ContratosImElements

class ContratosImPage {

    acessarMenuContratos() {
        cy.get(contratosImElements.btnContratosMenu())
            .should('be.visible')
            .click()
    }

    validarTelaContratos() {
        cy.url().should('include', 'menu=contract')
    }

    clicarBotaoCadastro() {
        cy.get(contratosImElements.telaCadastro())
            .should('be.visible')
            .click()
        cy.wait(1000)
    }

    validarTelaCadastro() {
        cy.get(contratosImElements.validaTelaCadastro(), { timeout: 10000 })
            .should('be.visible')
    }

    clicarBotaoCadastroIndividual() {
        cy.get(contratosImElements.telaCadastroIndividual())
            .should('be.visible')
            .click()
        cy.wait(1000)
    }

    validarTelaCadastroIndividual() {
        cy.get(contratosImElements.validaTelaCadastroInd(), { timeout: 10000 })
            .should('be.visible')
    }
}

export default ContratosImPage;
