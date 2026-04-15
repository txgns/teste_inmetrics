class LoginElements {

    campoID = () => { return 'input[name="login_id_client"]' }

    campoUser = () => { return 'input[name="login_user"]' }

    campoSenha = () => { return 'input[name="login_passwd"]' }

    botaoEntrar = () => { return 'input[name="submit_login"]' }

    bannerCabecalho = () => { return 'h3[class="banner-bemVindo-texto-2"]' }

    mensagemErro = () => { return '.error-message, .alert-danger, [class*="erro"], [class*="error"]' }

  }

  export default LoginElements;