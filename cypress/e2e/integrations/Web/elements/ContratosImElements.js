class ContratosImElements {

    btnContratosMenu = () => { return 'div[class="menuBar"]:nth-child(1) > a[class="menuButton"]:nth-child(4)' }
    
    telaCadastro = () => { return 'div[id="contract"] > a:nth-child(1)'}
    
    validaTelaCadastro = () => { return 'form[name="jobCadWhoActionForm"] > legend'}

    telaCadastroIndividual = () => { return 'div[id="contract"] > a:nth-child(1)'}

    validaTelaCadastroInd = () => { return 'form[name="contratoIndividualWhoAction"] > legend'}

  }

  export default ContratosImElements;