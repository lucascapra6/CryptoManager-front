<template>
  <div>
    <section class="cotacao-atual-container">
      <ul class="cotacao-atual">
        <li v-for="(jogo, index) in apiPancake" :key="index">
          <div class="ativo-cotacao-container">
            <p>{{ jogo.symbol }}</p>
            <p>{{ jogo.price | numeroArredondado }}</p>
          </div>
        </li>
      </ul>
    </section>
  </div>

</template>
<script>
export default {
  name: "Cotacao_Atual_component",
  props: {
    apiPancake: Array
  },
  filters: {
    numeroArredondado(numero) {
      return Number(numero).toFixed(3)
    },
  }
}
</script>

<style scoped src="./style.css">

</style>