import AbstractController from "../../../services/abstract-controller";
const axios = require('axios')
class ModalGerenciamentoWhitelists extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async alterarDataFinal() {
     await axios.put('http://localhost:3000/alterarDataFinal', {
         id: this.scope.acessoInfoWhitelist.idWhitelistSelecionada,
         data_final: this.scope.dataFinalAlterada
     })
        this.scope.$emit('ativar-data-final-alterada')
    }
}

export default ModalGerenciamentoWhitelists