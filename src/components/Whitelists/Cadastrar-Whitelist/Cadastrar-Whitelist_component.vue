<template>
  <section class="cadastrar-whitelist-container">
    <article class="titulo-container">
      <h1>Cadastre a Whitelist para a qual você se inscreveu</h1>
    </article>
    <div class="inputs-container">
      <div class="inputs">
        <label>Nome do Token</label><input type="text" v-model="nomeToken" @click="nomeTokenClicked = true" required
                                           :class="{'input-clicked':nomeTokenClicked}">
        <label>Data de início</label><input type="date" v-model="dataDeInicio" @click="dataInicioClicked = true"
                                            required :class="{'input-clicked':dataInicioClicked}">
        <label>Data de término</label><input type="date" v-model="dataFinal" @click="dataFinalClicked = true" required
                                             :class="{'input-clicked':dataFinalClicked}">
      </div>
      <button @click="controller.cadastrar()">Cadastrar</button>
    </div>
  </section>
</template>

<script>
import CadastrarWhitelist from "./Cadastrar_whitelist_component.controller";

export default {
  data() {
    return {
      controller: null,
      nomeToken: null,
      dataDeInicio: null,
      dataFinal: null,
      nomeTokenClicked: false,
      dataInicioClicked: false,
      dataFinalClicked: false
    }
  },
  beforeMount() {
    this.controller = new CadastrarWhitelist(this)
  },
  mounted() {
    document.title = 'Cadastrar Whitelists | CryptoManager'
  }
}
</script>

<style scoped src="./style.css">

</style>