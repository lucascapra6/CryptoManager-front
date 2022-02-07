class Ordenador {
    organizarJogosOrdemAlfabetica(jogos) {
        jogos.sort((a, b) => {
            if (a.jogo > b.jogo) {
                return 1
            }
            if (a.jogo < b.jogo) {
                return -1
            } else {
                return 0
            }
        })
    }
    organizarApiPancakeOrdemAlfabetica(apiPancake) {
        apiPancake.sort((a, b) => {
            if (a.symbol > b.symbol) {
                return 1
            }
            if (a.symbol < b.symbol) {
                return -1
            } else {
                return 0
            }
        })
    }
}

module.exports = new Ordenador()