import AbstractController from "../../../../services/abstract-controller";
const axios = require('axios')
class ModalGerenciamento extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async atualizarTokensFarmados() {
        if (this.scope.tokensFarmados !== null) {
            try {
                await axios.put('http://localhost:3000/atualizarBalanco', {
                    id: this.scope.acessoArray.idJogoSelecionado,
                    tokensFarmados: this.scope.tokensFarmados
                })
                this.scope.$emit("ativa-calcula-total-carteira")
                this.scope.$emit('ativar-calcula-roi')
                this.scope.modal.atualizarBalanco = false
                const CotacaoAtualTokenSelecionado = this.scope.apiPancake[this.scope.acessoArray.indiceJogoSelecionado].price
                alertTotalAddCarteira(this.scope.tokensFarmados, CotacaoAtualTokenSelecionado)
            } catch (e) {
                console.log(e)
            }
        } else alert('Preencha todos os dados')
    }
    atualizarPrecoMedio() {
        if (this.scope.novoPrecoMedio === null || this.scope.novoPrecoMedio === 0) return alert('Digite um valor válido')
        axios.put('http://localhost:3000/atualizarPrecoMedio', {
            id: this.scope.acessoArray.idJogoSelecionado,
            precoMedioAtualizado: this.scope.novoPrecoMedio
        })
        alert('Preço médio atualizado com sucesso!')
        this.scope.$emit('ativar-calcula-roi')
        this.scope.modal.atualizarPrecoMedio = false
    }
    async liquidar() {
        if (this.scope.jogos[this.scope.acessoArray.indiceJogoSelecionado].total_carteira <= 0) return alert('Saldo insuficiente em carteira para liquidar')
        const confirmar = confirm('Ao liquidar, você está dizendo que realizou a venda de todos seus tokens em carteira. Deseja continuar?')
        if (confirmar) {
            await axios.put("http://localhost:3000/liquidar", {
                id: this.scope.acessoArray.idJogoSelecionado
            })
            await axios.put("http://localhost:3000/profit", {
                id: this.scope.acessoArray.idJogoSelecionado
            })
            alert('Total em carteira liquidado com sucesso! Confira seu profit.')
            this.scope.$emit("ativar-fetch-jogos")
        }
    }
    async calcularROI() {
        try {
            if (this.scope.mediaTokensFarmadosDia !== null) {
                await axios.put('http://localhost:3000/calculaRoi', {
                    id: this.scope.jogos[this.scope.acessoArray.indiceJogoSelecionado].id,
                    mediaTokensFarmadosDia: this.scope.mediaTokensFarmadosDia,
                    investimento: this.scope.jogos[this.scope.acessoArray.indiceJogoSelecionado].investimento,
                    totalMaximo: Number(this.scope.jogos[this.scope.acessoArray.indiceJogoSelecionado].total_liquidado)
                        + Number(this.scope.jogos[this.scope.acessoArray.indiceJogoSelecionado].total_carteira),
                    cotacaoAtual: this.scope.apiPancake[this.scope.acessoArray.indiceJogoSelecionado].price
                })//enviar as informações de investimento, total e cotação atual para o backend para evitar busca no banco de dados.
                this.scope.modal.calcularROI = false
                this.scope.$emit('ativar-calcula-roi')
            }
        } catch (e) {
            console.log(e)
        }
    }
}
function alertTotalAddCarteira(tokensAdquiridos, precoAtual) {
    alert(`Total de Tokens inseridos: ${tokensAdquiridos}
Valor inserido em carteira: ${Number(tokensAdquiridos * precoAtual).toFixed(2)}`)
}
export default ModalGerenciamento