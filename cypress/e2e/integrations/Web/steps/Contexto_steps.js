/* global Given, Then, When, And */

import Contexto from '../pageobjects/Contexto'

const contexto = new Contexto

Given("que estou logado no sistema", () => {
    contexto.fazerLogin();
})
