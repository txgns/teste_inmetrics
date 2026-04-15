# language: pt
# encoding: UTF-8

Funcionalidade: Gestão de Contratos IM
  Como um usuário logado no sistema
  Eu quero acessar e gerenciar contratos
  Para realizar operações relacionadas a contratos

  Cenario: Acessar menu de contratos com sucesso
    Dado que estou logado no sistema
    Quando acesso o menu de contratos
    Entao valido que estou na tela de contratos

  Cenario: Abrir tela de cadastro de contrato
    Dado que estou logado no sistema
    E acesso o menu de contratos
    Quando clico no botao de cadastro
    Entao valido que a tela de cadastro foi aberta

  Cenario: Abrir tela de cadastro individual de contrato
    Dado que estou logado no sistema
    E acesso o menu de contratos
    Quando clico no botao de cadastro individual
    Entao valido que a tela de cadastro individual foi aberta
