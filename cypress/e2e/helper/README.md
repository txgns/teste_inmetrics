# Helper: Extrator de Elementos

Este helper automatiza a extração de elementos de páginas web para facilitar a criação de arquivos Elements.js.

## Como usar

### 1. Execute o teste
```bash
npx cypress open
```

### 2. Selecione o teste
Na interface do Cypress, selecione:
- **E2E Testing**
- Navegue até: `helper/extrair-elementos.cy.js`
- Clique para executar

### 3. Abra o Console do Navegador
- Pressione **F12** no navegador do Cypress
- Vá para a aba **Console**

### 4. Veja os resultados

Você verá:
- **Tabela com todos os elementos** encontrados na página
- **Código gerado** pronto para copiar para seu arquivo Elements.js

### 5. Copie e cole

Copie o código do console e cole no arquivo Elements correspondente:
- `LoginElements.js`
- `ContratosImElements.js`
- etc.

## Comandos disponíveis

### cy.extrairElementos()
Extrai **todos** os elementos interativos da página (inputs, buttons, links, etc.)

```javascript
cy.extrairElementos();
```

### cy.extrairElemento(seletor)
Extrai informações de um **elemento específico**

```javascript
cy.extrairElemento('button.submit');
```

## Personalizando

Edite o arquivo `extrair-elementos.cy.js` para:
- Mudar a URL
- Navegar para páginas específicas
- Extrair elementos de diferentes telas
- Adicionar ações antes de extrair (ex: fazer login)

## Exemplo de saída

```javascript
// Código gerado pronto para usar:
btnLogin = () => { return 'input[name="submit_login"]' }
campoEmail = () => { return 'input[name="login_user"]' }
campoSenha = () => { return 'input[name="login_passwd"]' }
```
