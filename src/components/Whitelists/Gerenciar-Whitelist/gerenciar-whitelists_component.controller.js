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
    async deletarWhitelist() {
        await axios.post('http://localhost:3000/')
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
}

export default GerenciadorWhitelistsController