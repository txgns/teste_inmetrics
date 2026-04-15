// ***********************************************
// Custom Commands para auxiliar na automação
// ***********************************************

/**
 * Comando para extrair e listar todos os elementos interativos da página
 * Uso: cy.extrairElementos('NomeDaPagina')
 * O arquivo .md será salvo em cypress/Re_Elementos/
 */
Cypress.Commands.add('extrairElementos', (nomePagina = 'Pagina') => {
    cy.url().then((urlAtual) => {
        cy.window().then((win) => {
            const elementos = [];
            const dataHora = new Date().toLocaleString('pt-BR').replace(/[/:]/g, '-');

            // Seletores de elementos interativos
            const seletores = [
                'input',
                'button',
                'a',
                'select',
                'textarea',
                '[onclick]',
                '[role="button"]',
                '.btn',
                '[type="submit"]'
            ];

            seletores.forEach(seletor => {
                win.document.querySelectorAll(seletor).forEach((el, index) => {
                    const info = {
                        tipo: el.tagName.toLowerCase(),
                        id: el.id || 'sem-id',
                        name: el.name || 'sem-name',
                        class: el.className || 'sem-class',
                        text: (el.innerText?.substring(0, 50) || el.value || 'sem-texto').replace(/\n/g, ' '),
                        href: el.href || '',
                        seletorCSS: obterSeletorCSS(el),
                        index: index
                    };
                    elementos.push(info);
                });
            });

            // Função auxiliar para gerar seletor CSS único
            function obterSeletorCSS(element) {
                if (element.id) {
                    return `#${element.id}`;
                }
                if (element.name) {
                    return `${element.tagName.toLowerCase()}[name="${element.name}"]`;
                }
                if (element.className && typeof element.className === 'string') {
                    const classes = element.className.split(' ').filter(c => c).join('.');
                    return `${element.tagName.toLowerCase()}.${classes}`;
                }
                return element.tagName.toLowerCase();
            }

            function gerarNomeMetodo(el) {
                let nome = '';
                if (el.name && el.name !== 'sem-name') {
                    nome = el.name.replace(/[^a-zA-Z0-9]/g, '_');
                } else if (el.id && el.id !== 'sem-id') {
                    nome = el.id.replace(/[^a-zA-Z0-9]/g, '_');
                } else if (el.text && el.text !== 'sem-texto') {
                    nome = el.text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
                } else {
                    nome = `${el.tipo}_${el.index}`;
                }
                return nome;
            }

            // Exibe no console do Cypress
            console.log('=== ELEMENTOS ENCONTRADOS ===');
            console.table(elementos);

            // Gera conteúdo do arquivo Markdown
            let mdContent = `# Elementos Extraídos - ${nomePagina}\n\n`;
            mdContent += `**Data/Hora:** ${new Date().toLocaleString('pt-BR')}\n\n`;
            mdContent += `**URL:** ${urlAtual}\n\n`;
            mdContent += `**Total de elementos:** ${elementos.length}\n\n`;
            mdContent += `---\n\n`;

            // Tabela de elementos
            mdContent += `## Tabela de Elementos\n\n`;
            mdContent += `| Tipo | ID | Name | Texto | Seletor CSS |\n`;
            mdContent += `|------|-----|------|-------|-------------|\n`;
            elementos.forEach(el => {
                mdContent += `| ${el.tipo} | ${el.id} | ${el.name} | ${el.text.substring(0, 30)} | \`${el.seletorCSS}\` |\n`;
            });

            // Código para Elements.js
            mdContent += `\n---\n\n`;
            mdContent += `## Código para Elements.js\n\n`;
            mdContent += `\`\`\`javascript\n`;
            mdContent += `class ${nomePagina}Elements {\n\n`;
            elementos.forEach(el => {
                const nomeMetodo = gerarNomeMetodo(el);
                mdContent += `    ${nomeMetodo} = () => { return '${el.seletorCSS}' }\n\n`;
            });
            mdContent += `}\n\n`;
            mdContent += `export default ${nomePagina}Elements;\n`;
            mdContent += `\`\`\`\n`;

            // Salva o arquivo .md
            const nomeArquivo = `cypress/Re_Elementos/${nomePagina}_${dataHora}.md`;
            cy.writeFile(nomeArquivo, mdContent);

            console.log(`\n✅ Arquivo salvo: ${nomeArquivo}`);

            return elementos;
        });
    });
});

/**
 * Comando para extrair elemento específico por seletor
 * Uso: cy.extrairElemento('button.submit')
 */
Cypress.Commands.add('extrairElemento', (seletor) => {
    cy.get(seletor).then(($el) => {
        const el = $el[0];
        const info = {
            tagName: el.tagName,
            id: el.id,
            name: el.name,
            className: el.className,
            text: el.innerText || el.value,
            attributes: Array.from(el.attributes).map(attr => ({
                name: attr.name,
                value: attr.value
            }))
        };

        console.log('=== INFORMAÇÕES DO ELEMENTO ===');
        console.log(info);
        console.log('\n=== SUGESTÕES DE SELETORES ===');

        if (el.id) console.log(`ID: #${el.id}`);
        if (el.name) console.log(`Name: [name="${el.name}"]`);
        if (el.className) console.log(`Class: .${el.className.split(' ').join('.')}`);

        // Seletores por atributos data-*
        const dataAttrs = info.attributes.filter(attr => attr.name.startsWith('data-'));
        dataAttrs.forEach(attr => {
            console.log(`Data: [${attr.name}="${attr.value}"]`);
        });

        return info;
    });
});
