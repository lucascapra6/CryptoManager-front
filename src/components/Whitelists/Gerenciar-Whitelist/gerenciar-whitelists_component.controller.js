import AbstractController from "../../../services/abstract-controller";
import {differenceInDays} from 'date-fns';
const axios = require('axios')

class GerenciadorWhitelistsController extends AbstractController {
    constructor(scope) {
        super(scope);
    }
    async getWhitelists() {
        const response = await fetch('http://localhost:3000/whitelists')
        this.scope.whitelists = await response.json()
        this.calcTempoRestanteWhitelist()
    }
    async deletarWhitelist(index) {
        await axios.post('http://localhost:3000/deletarWhitelist', {
            id: this.scope.whitelists[index].id
        })
        await this.getWhitelists()
    }
    async deletarWhitelistMobile(index) {
        await axios.post('http://localhost:3000/deletarWhitelist', {
            id: this.scope.whitelists[index].id
        })
        await this.getWhitelists()
    }
    calcTempoRestanteWhitelist() {
        for (let i = 0; i <this.scope.whitelists.length; i++) {
            const result = differenceInDays(
                new Date(Date.now()),
                new Date(this.scope.whitelists[i].data_final),
            )
            this.scope.whitelists[i].tempo_restante = (result * -1) //cria uma nova propriedade(tempo_restante_ em cada item do array
        }
    }
    abrirModalGerenciamento(index) {
        this.scope.acessoArray.indiceWhitelistSelecioanda = index
        this.scope.acessoArray.nomeWhitelistSelecionada = this.scope.whitelists[index].token_nome
        this.scope.acessoArray.idWhitelistSelecionada = this.scope.whitelists[index].id
    }
}

export default GerenciadorWhitelistsController