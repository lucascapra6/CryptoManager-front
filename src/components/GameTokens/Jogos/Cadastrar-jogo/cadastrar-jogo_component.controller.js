import AbstractController from "../../../../services/abstract-controller";
const axios = require('axios')

class CadastrarJogo extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async cadastrarJogo() {
        try {
            const response = await fetch(`https://api.pancakeswap.info/api/v2/tokens/${this.scope.enderecoToken}`)
            this.scope.jogo = await response.json()
            if(this.scope.mediaTokensFarmDia === null) this.scope.mediaTokensFarmDia = 0
            await axios.post('http://localhost:3000/cadastrarJogo', {
                jogo:this.scope.jogo.data.symbol,
                enderecoToken: this.scope.enderecoToken,
                qtdTokensAdquiridos:this.scope.quantidadeTokens,
                precoMedio: this.scope.jogo.data.price,
                mediaTokensFarmDia: this.scope.mediaTokensFarmDia
            })
            alert('Token cadastrado com sucesso')
        } catch (e) {
            alert('Endereço de contrato inválido, confira se o contrato está ativo ou foi copiado corretamente para este campo.')
            console.log(e)
        }
    }
}
export default CadastrarJogo