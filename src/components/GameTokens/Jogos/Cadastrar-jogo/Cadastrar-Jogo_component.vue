<head>
<title>Cadastrar Jogo</title>
<meta name="description" content="Cadastre os GameTokens NFT que você quer acompanhar!">
</head>
<template>
  <section class="cadastrar-jogo-container">
    <article class="titulo-container">
      <h1>Cadastre o jogo que você investiu</h1>
      <p>O contrato do token pode ser obtido no site da <a target="_blank" href="https://bscscan.com/">BscScan</a></p>
    </article>
    <div class="inputs-container">
      <div class="inputs">
        <label>Contrato do Token</label><input required @click="contratoClicked = true"
                                               :class="{'input-clicked': contratoClicked}"
                                               title="Digite o endereço do contrato" type="text" minlength="42"
                                               maxlength="42" v-model="enderecoToken">
        <label>Quantidade de Tokens</label><input required type="number"
                                                  @click="qtdTokensClicked = true"
                                                  :class="{'input-clicked': qtdTokensClicked}"
                                                  title="Digite a quantidade de tokens que você adquiriu"
                                                  class="input-number" v-model="quantidadeTokens">
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
      controller: null,
      jogo: [],
      enderecoToken: null,
      quantidadeTokens: null,
      mediaTokensFarmDia: null,
      contratoClicked: false,
      qtdTokensClicked:false
    }
  },
  beforeMount() {
    this.controller = new CadastrarJogo(this)
  },
  mounted() {
    document.title = 'Cadastrar Jogo | CryptoManager'
  }
}
</script>

<style scoped src="./style.css"></style>