# language: pt
# encoding: UTF-8

Funcionalidade: Extrator de Elementos
  Como um desenvolvedor de testes
  Eu quero extrair elementos das páginas
  Para facilitar a criação de arquivos Elements.js

  Cenario: Extrair elementos da página de login
    Dado que acesso a URL
    Quando executo o extrator de elementos da pagina "Login"

  Cenario: Extrair elementos da tela principal após login
    Dado que estou na tela principal do sistema
    Quando executo o extrator de elementos da pagina "TelaPrincipal"

  Cenario: Extrair elemento específico do login
    Dado que acesso a URL
    Quando executo o extrator para o elemento "input[name='login_user']"
