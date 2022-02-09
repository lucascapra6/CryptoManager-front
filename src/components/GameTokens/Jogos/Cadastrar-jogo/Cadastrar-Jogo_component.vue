<template>
    <section class="cadastrar-jogo-container">
      <article class="titulo-container">
        <h1>Cadastre o jogo que você investiu</h1>
        <p>O contrato do token pode ser obtido no site da <a target="_blank" href="https://bscscan.com/">BscScan</a></p>
      </article>
      <div class="inputs-container">
        <div class="inputs">
          <label>Contrato do Token</label><input required type="text" minlength="42" maxlength="42" v-model="enderecoToken">
          <label>Quantidade de Tokens</label><input required type="number" class="input-number" v-model="quantidadeTokens">
          <label>Média de Tokens farmados por dia</label><input type="number" v-model="mediaTokensFarmDia">
        </div>
        <button @click="controller.cadastrarJogo()">Cadastrar</button>
      </div>
    </section>
</template>

<script>
import CadastrarJogo from "./cadastrar-jogo_component.controller";
export default {
  data() {
    return {
      controller:null,
      jogo: [],
      enderecoToken: null,
      quantidadeTokens: null,
      mediaTokensFarmDia: null
    }
  },
  beforeMount() {
    this.controller = new CadastrarJogo(this)
  }
}
</script>

<style scoped src="./style.css"></style>