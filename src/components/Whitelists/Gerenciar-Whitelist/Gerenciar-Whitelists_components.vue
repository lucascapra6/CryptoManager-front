<template>
  <div>
    <PageLoading v-if="pageLoading"></PageLoading>
    <div class="gerenciar-whitelists">
      <div class="whitelists-lista-container">
        <table>
          <tr class="descricao-coluna-whitelists">
            <th>Token/Jogo</th>
            <th>Data de Início</th>
            <th>Data Final</th>
            <th @click="controller.calcTempoRestanteWhitelist()">Prazo Rest.</th>
            <th>Gerenciar</th>
          </tr>

          <tr class="whitelists-lista" v-for="(whitelist, index) in whitelists" :key="index">
            <td>{{whitelist.token_nome}}</td>
            <td>{{whitelist.data_inicio | formatDate}}</td>
            <td>{{whitelist.data_final | formatDate}}</td>
            <td>{{whitelist.tempo_restante | formatPrazo}}</td>
            <div class="gerenciamento-btn-container">
              <td>
                <router-link class="gerenciamento-btn" :to="{name:'whitelist', params: {whitelist:'teste'}}"><img
                    src="../../../assets/115892.png"></router-link>
              </td>
              <td class="delete-btn">X</td>
            </div>
          </tr>
        </table>
      </div>
      <router-view></router-view>
    </div>
  </div>

</template>
<script>
import GerenciadorWhitelistsController from "./gerenciar-whitelists_component.controller";
export default {
  data() {
    return {
      controller: null,
      whitelists: [],
      pageLoading:false
    }
  },
  filters: {
    formatDate(input) {
      let datePart = input.match(/\d+/g),
          year = datePart[0].substring(0), // get only two digits
          month = datePart[1], day = datePart[2];
      return day + '/' + month + '/' + year;
    },
    formatPrazo(prazo) {
      if(prazo < 0) return prazo = 'Encerrada'
      if(prazo === 1) return `${prazo} dia`
      return `${prazo} dias`
    }
  },
  beforeMount() {
    this.controller = new GerenciadorWhitelistsController(this)
    this.controller.getWhitelists()
  },
  mounted() {
    document.title = 'Gerenciar Whitelists | CryptoManager';
    this.pageLoading = true
    setTimeout(() => {this.pageLoading = false}, 1500)
  }
}
</script>
<style scoped src="./style.css">

</style>