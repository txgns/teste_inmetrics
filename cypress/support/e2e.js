// Importa custom commands
import './commands'

// Ignora erros de exceção não capturados da aplicação
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste
    return false
})
