<template>
  <div class="modal-gerenciar-whitelists">
    <div class="modal-gerenciar-whitelists-container">
      <div class="btn-fechar-modal-container">
        <router-link to="/gerenciarWhitelists" class="btn-fechar-modal">X</router-link>
      </div>
      <h1 class="nomeToken">{{ acessoInfoWhitelist.nomeWhitelistSelecionada }}</h1>
      <label class="info-modal-whitelists">Editar data final: <input type="date" v-model="dataFinalAlterada"> </label>
      <button class="btn-confirmar" @click="controller.alterarDataFinal()">Confirmar</button>
    </div>
  </div>

</template>

<script>
import ModalGerenciamentoWhitelists from "./modal-gerencimaneto-wl_component.controller";

export default {
  name: "Modal-Gerenciamento-WL_component",
  data() {
    return {
      controller: null,
      dataFinalAlterada: null
    }
  },
  props: {
    acessoInfoWhitelist: Object
  },
  beforeMount() {
    this.controller = new ModalGerenciamentoWhitelists(this)
  }
}
</script>

<style scoped src="./style.css">

</style>