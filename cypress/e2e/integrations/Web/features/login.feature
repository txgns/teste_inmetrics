# language: pt
# encoding: UTF-8

@Login
Funcionalidade: Login no sistema
  Como um usuário do sistema
  Eu quero realizar login
  Para acessar as funcionalidades do sistema

  Cenario: Login com credenciais válidas
    Dado que acesso a URL
    Quando preencho os campos necessarios
    E clico no botao entrar
    Entao valido que o login foi realizado com sucesso

  Cenario: Login com senha inválida
    Dado que acesso a URL
    Quando preencho o ID com "1"
    E preencho o usuario com "caio.souza"
    E preencho a senha com "senhaErrada123"
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login com usuário inválido
    Dado que acesso a URL
    Quando preencho o ID com "1"
    E preencho o usuario com "usuario.invalido"
    E preencho a senha com "BlueCS22"
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login com ID inválido
    Dado que acesso a URL
    Quando preencho o ID com "999"
    E preencho o usuario com "caio.souza"
    E preencho a senha com "BlueCS22"
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login com todos os campos vazios
    Dado que acesso a URL
    Quando deixo o campo ID vazio
    E deixo o campo usuario vazio
    E deixo o campo senha vazio
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login sem preencher ID
    Dado que acesso a URL
    Quando deixo o campo ID vazio
    E preencho o usuario com "caio.souza"
    E preencho a senha com "BlueCS22"
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login sem preencher usuário
    Dado que acesso a URL
    Quando preencho o ID com "1"
    E deixo o campo usuario vazio
    E preencho a senha com "BlueCS22"
    E clico no botao entrar
    Entao valido que o login não foi realizado

  Cenario: Login sem preencher senha
    Dado que acesso a URL
    Quando preencho o ID com "1"
    E preencho o usuario com "caio.souza"
    E deixo o campo senha vazio
    E clico no botao entrar
    Entao valido que o login não foi realizado
