import AbstractController from "../../../../services/abstract-controller";
import ordenador from "../../../../services/ordenador";
const axios = require('axios')

class GerenciadorDeJogos extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async init() {
        await this.fetchJogos()
        this.buscarContratosCadastrados()
        await this.fetchContratos()
        await this.recalcularRoi()
    }
    async fetchJogos() {
        const response = await fetch('http://localhost:3000/jogos')
        this.scope.jogos = await response.json()
        ordenador.organizarJogosOrdemAlfabetica(this.scope.jogos)
    }
    buscarContratosCadastrados() {
        //armazena os endereços dos contratos no array contratos para serem iterados na url da api da pancake.
        this.scope.jogos.forEach(element => {
            const contratos = element.endereco_token
            this.scope.contratosCadastrados.push(contratos)
        })
    }
    async fetchContratos() {
        try {
            //iterar em um await/promise vai precisar sempre do Promise.all
            await Promise.all(this.scope.contratosCadastrados.map(async element => {
                const response = await fetch(`https://api.pancakeswap.info/api/v2/tokens/${element}`)
                const resultado = await response.json()
                this.scope.apiPancake.push(resultado.data)
                ordenador.organizarApiPancakeOrdemAlfabetica(this.scope.apiPancake)
            }))
            this.calcularTotalEmCarteira()
        } catch (e) {
            console.log(e)
        }
    }
    async deletarJogo(index) {
        try {
            const idJogoSelecionado = this.scope.jogos[index].id
            await axios.post('http://localhost:3000/deletarJogo', {
                id: idJogoSelecionado
            })
            this.scope.apiPancake.splice(index, 1)
            await this.fetchJogos()
        } catch (e) {
            console.log(e)
        }
    }
    async deletarJogoMobile() {
        const idJogoSelecionado = this.scope.jogos[this.scope.indiceJogoSelecionadoMobile].id
        try {
            await axios.post('http://localhost:3000/deletarJogo', {
                id: idJogoSelecionado
            })
            this.scope.apiPancake.splice(this.scope.indiceJogoSelecionadoMobile, 1)
            await this.fetchJogos()
        } catch (e) {
            console.log(e)
        }
    }
    async calcularTotalEmCarteira() {
        for (let i = 0; i < this.scope.jogos.length; i++) {
            axios.put('http://localhost:3000/totalEmCarteira', {
                id: this.scope.jogos[i].id,
                tokensFarmados: this.scope.jogos[i].tokens_farmados,
                cotacaoAtual: this.scope.apiPancake[i].price
            })
        }
        await this.fetchJogos()
    }
    async recalcularRoi() {
        await this.fetchJogos()
        for (let i = 0; i < this.scope.jogos.length; i++) {
            axios.put('http://localhost:3000/recalcularRoi', {
                id: this.scope.jogos[i].id,
                investimento: this.scope.jogos[i].investimento,
                totalMaximo: Number(this.scope.jogos[i].total_liquidado) + Number(this.scope.jogos[i].total_carteira),
                cotacaoAtual: this.scope.apiPancake[i].price,
                tokensMediaDiaria: this.scope.jogos[i].tokens_media_diaria
            })
        }
        this.fetchJogos()
    }
    abrirModalGerenciamento(index) {
        this.scope.acessoArray.indiceJogoSelecionado = index
        this.scope.acessoArray.idJogoSelecionado = this.scope.jogos[index].id
        this.scope.acessoArray.nomeJogoSelecionado = this.scope.jogos[index].jogo
    }
    parearAcessoDadosMobileDesktop() {
        const indiceJogoSelecionado = this.scope.indiceJogoSelecionadoMobile
        const idJogoSelecionado = this.scope.jogos[this.scope.indiceJogoSelecionadoMobile].id
        const nomeJogoSelecionado = this.scope.jogos[this.scope.indiceJogoSelecionadoMobile].jogo
        this.scope.acessoArray.indiceJogoSelecionado = indiceJogoSelecionado
        this.scope.acessoArray.idJogoSelecionado = idJogoSelecionado
        this.scope.acessoArray.nomeJogoSelecionado = nomeJogoSelecionado
    }
    async ativarFetchJogos() {
        await this.fetchJogos()
        ordenador.organizarJogosOrdemAlfabetica(this.scope.jogos)
        await this.fetchJogos()
    }
    async ativarCalculaROI() {
        await this.fetchJogos()
        await this.recalcularRoi()
        await this.fetchJogos()
    }
    async ativarCalculaTotalCarteira() {
        await this.fetchJogos()
        await this.calcularTotalEmCarteira()
        await this.fetchJogos()
    }
}

export default GerenciadorDeJogos