<template>
  <div class="modal-gerenciar-whitelists">
    <div class="modal-gerenciar-whitelists-container">
      <div class="btn-fechar-modal-container">
        <router-link to="/gerenciarWhitelists" class="btn-fechar-modal">X</router-link>
      </div>
      <h1 class="nomeToken">Nome do Token</h1>
      <label class="info-modal-whitelists">Editar data inicial: <input type="date"> </label>
      <label class="info-modal-whitelists">Editar data final: <input type="date"> </label>
      <button class="btn-confirmar">Confirmar</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Modal-Gerenciamento-WL_component"
}
</script>

<style scoped src="./style.css" >

</style>