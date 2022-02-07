import AbstractController from "../../../services/abstract-controller";
const axios = require('axios')
class CadastrarWhitelist extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async cadastrar() {
        await axios.post('http://localhost:3000/cadastrarWhitelist', {
            token: this.scope.nomeToken,
            data_inicio: this.scope.dataDeInicio,
            data_final: this.scope.dataFinal
        })
    }
}
export default CadastrarWhitelist