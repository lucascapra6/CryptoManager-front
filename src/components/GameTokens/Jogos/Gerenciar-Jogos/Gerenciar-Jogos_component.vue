<template>
  <div>
    <PageLoading v-if="pageLoading"></PageLoading>
    <cotacao-atual :apiPancake="apiPancake"></cotacao-atual>
    <main>
      <div class="gerenciar-jogos">
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
              <button @click="controller.abrirModalGerenciamento(index)" class="gerenciamento-btn">
                <router-link :to="{name:'jogo', params: {jogo: jogo.jogo}}"><img
                    src="../../../../assets/115892.png"></router-link>
              </button>
              <button @click="controller.deletarJogo(index)" class="delete-btn">X</button>
            </div>
          </tr>
        </table>
        <router-view :jogos="jogos" :apiPancake="apiPancake" :acessoArray="acessoArray"
                     @ativar-fetch-jogos="controller.ativarFetchJogos()"
                     @ativar-calcula-roi="controller.ativarCalculaROI()"
                     @ativa-calcula-total-carteira="controller.ativarCalculaTotalCarteira()">
        </router-view>
      </div>

      <div class="gerenciar-jogos-mobile">
        <div class="select-and-btn-container">
          <select v-model="indiceJogoSelecionadoMobile">
            <option v-for="(jogo, index) in jogos" :key="index" :value="index">{{jogo.jogo}}</option>
          </select>
          <div class="botoes">
            <button class="gerenciamento-btn" @click="controller.parearAcessoDadosMobileDesktop()">
              <router-link :to="{name:'jogo', params:{jogo:this.jogos[indiceJogoSelecionadoMobile].jogo}}">
                <img src="../../../../assets/115892.png">
              </router-link>
            </button>
            <button @click="controller.deletarJogoMobile()" class="delete-btn">X</button>
          </div>
        </div>
        <table>
          <tr class="descricao-coluna-jogos-mobile">
            <th>Token</th>
            <th>Investimento</th>
            <th>Preço médio</th>
            <th>Tokens farmados</th>
            <th>Total em carteira</th>
            <th>Total liquidado</th>
            <th>Profit</th>
            <th>Roi(dias)</th>
          </tr>
          <tr class="jogos-lista-mobile">
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].jogo }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].investimento }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].preco_medio }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].tokens_farmados }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].total_carteira }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].total_liquidado }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].profit }}</td>
            <td>{{ this.jogos[this.indiceJogoSelecionadoMobile].roi }}</td>
          </tr>
        </table>
        <router-view :jogos="jogos" :apiPancake="apiPancake" :acessoArray="acessoArray"
                     @ativar-fetch-jogos="controller.ativarFetchJogos()"
                     @ativar-calcula-roi="controller.ativarCalculaROI()"
                     @ativa-calcula-total-carteira="controller.ativarCalculaTotalCarteira()">
        </router-view>
      </div>
    </main>
  </div>

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
      indiceJogoSelecionadoMobile: 0,
      acessoArray: {
        indiceJogoSelecionado: null,
        idJogoSelecionado: null,
        nomeJogoSelecionado: null,
      },
      contratosCadastrados: [],
      apiPancake: [],
      pageLoading: false
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
  },
  mounted() {
    document.title = 'Gerenciar Jogos | CryptoManager'
    this.pageLoading = true
    setTimeout(() => {this.pageLoading = false}, 1500)
  }
}
</script>

<style scoped src="./style.css"></style>