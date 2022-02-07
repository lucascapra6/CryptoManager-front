<template>
  <section class="cadastrar-whitelist-container">
    <article class="titulo-container">
      <h1>Cadastre a Whitelist para a qual você se inscreveu</h1>
    </article>
    <div class="inputs-container">
      <div class="inputs">
        <label>Nome do Token</label><input type="text" v-model="nomeToken">
        <label>Data de início</label><input type="date" v-model="dataDeInicio">
        <label>Data de término</label><input type="date" v-model="dataFinal">
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
      dataFinal: null
    }
  },
  beforeMount() {
    this.controller = new CadastrarWhitelist(this)
  }
}
</script>

<style scoped src="./style.css">

</style>