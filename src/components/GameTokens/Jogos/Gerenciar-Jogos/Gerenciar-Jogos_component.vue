<template>
  <main class="gerenciar-jogos">
    <cotacao-atual :apiPancake="apiPancake"></cotacao-atual>
    <table class="jogos-lista-container">
      <tr class="descricao-colunas-jogos">
        <th>Jogo</th>
        <th>Investimento</th>
        <th>Preço médio</th>
        <th>Tokens farmados</th>
        <th>Total em carteira</th>
        <th>Total liquidado</th>
        <th>Profit</th>
        <th>ROI(dias)</th>
        <th class="null">Gerenciar</th>
      </tr>
      <tr class="jogos-lista" v-for="(jogo, index) in jogos" :key="index">
        <td>{{ jogo.jogo }}</td>
        <td>{{ jogo.investimento | numeroParaDinheiro }}</td>
        <td>{{ jogo.preco_medio | numeroParaDinheiro }}</td>
        <td>{{ jogo.tokens_farmados | setDefaultZero }}</td>
        <td>{{ jogo.total_carteira | setDefaultZero | numeroParaDinheiro}}</td>
        <td>{{ jogo.total_liquidado | setDefaultZero | numeroParaDinheiro }}</td>
        <td>{{ jogo.profit | setDefaultZero | numeroParaDinheiro }}</td>
        <td>{{ jogo.roi | setValorNegativoParaZero }}</td>
        <div class="gerenciamento-btn-container">
        <td @click="controller.abrirModalGerenciamento(index)" class="gerenciamento-btn">
          <router-link :to="{name:'jogo', params: {jogo: jogo.jogo}}"><img
              src="../../../../assets/115892.png"></router-link>
        </td>
        <td @click="controller.deletarJogo(index)" class="delete-btn">X</td>
        </div>
      </tr>
    </table>
    <router-view :jogos="jogos" :apiPancake="apiPancake" :acessoArray="acessoArray"
                 @ativar-fetch-jogos="controller.ativarFetchJogos()" @ativar-calcula-roi="controller.ativarCalculaROI()"
                 @ativa-calcula-total-carteira="controller.ativarCalculaTotalCarteira()"></router-view>
  </main>
</template>

<script>
import CotacaoAtual from "./CotacaoAtual/Cotacao_Atual_component";
import GerenciadorDeJogos from "./gerenciar-jogos_component.controller";
export default {
  components: {
    CotacaoAtual
  },
  data() {
    return {
      controller:null,
      jogos: [],
      acessoArray: {
        indiceJogoSelecionado: null,
        idJogoSelecionado: null,
        nomeJogoSelecionado: null,
      },
      contratosCadastrados: [],
      apiPancake: []
    }
  },
  filters: {
    setValorNegativoParaZero(numero) {
      if (numero < 0) {
        return numero = 0
      }
      return numero
    },
    setDefaultZero(numero) {
      if (numero === null) return numero = 0
      return numero
    },
    numeroParaDinheiro(numero) {
      return `$${numero}`
    }
  },
  beforeMount() {
    this.controller = new GerenciadorDeJogos(this)
    this.controller.init()
  }
}
</script>

<style scoped src="./style.css"></style>