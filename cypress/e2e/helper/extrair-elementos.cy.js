/// <reference types="cypress" />

/**
 * HELPER: Script para extrair elementos de páginas
 *
 * Como usar:
 * 1. Rode este teste no Cypress: npx cypress open
 * 2. Selecione este arquivo para executar
 * 3. Abra o Console do navegador (F12)
 * 4. Veja a tabela com todos os elementos e o código gerado
 * 5. Copie e cole no arquivo Elements.js correspondente
 */

describe('Extrator de Elementos', () => {

    // Configure aqui a URL e credenciais se necessário
    const url = Cypress.config('baseUrl');
    const idClient = Cypress.config('idClient');
    const user = Cypress.config('user');
    const senha = Cypress.config('senha');

    it('Extrair elementos da página de login', () => {
        cy.visit(url);

        // Extrai todos os elementos interativos
        cy.extrairElementos();

        // Aguarda para visualizar no console
        cy.wait(2000);
    });

    it('Extrair elementos após login', () => {
        cy.visit(url);

        // Faz login
        cy.get('input[name="login_id_client"]').type(idClient);
        cy.get('input[name="login_user"]').type(user);
        cy.get('input[name="login_passwd"]').type(senha);
        cy.get('input[name="submit_login"]').click();

        // Aguarda carregar
        cy.wait(2000);

        // Extrai elementos da página principal
        cy.extrairElementos();

        cy.wait(2000);
    });

    it('Extrair elemento específico - exemplo', () => {
        cy.visit(url);

        // Exemplo: extrair informações de um elemento específico
        // Substitua o seletor pelo elemento que você quer inspecionar
        cy.get('input[name="login_user"]').then(() => {
            cy.extrairElemento('input[name="login_user"]');
        });

        cy.wait(2000);
    });
});
