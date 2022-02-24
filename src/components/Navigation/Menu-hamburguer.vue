<template>
  <div>
    <div @click="menuAberto = !menuAberto" class="menu-hamburguer">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <transition>
      <nav v-show="menuAberto" class="modal-menu">
        <ul>
          <li @click="menuAberto=false"><router-link to="/" class="menu-item-inicio">Inicio</router-link></li>
          <li @click="toggleMenuTokens"><p :class="{'color-white':menuTokensAberto}">Tokens</p></li>
          <li @click="menuAberto = false" v-show="menuTokensAberto" class="modal-tokens-opcoes">
            <router-link to="/cadastrarJogo" class="cadastrar-jogo-link">Cadastrar</router-link>
            <router-link to="/gerenciarJogos" class="gerenciar-jogo-link">Gerenciar</router-link>
          </li>
          <li @click="toggleMenuWhitelists"><p :class="{'color-white':menuWhitelistsAberto}">Whitelists</p></li>
            <li @click="menuAberto = false" v-show="menuWhitelistsAberto" class="modal-tokens-opcoes">
                <router-link to="/cadastrarWhitelist" class="cadastrar-whitelist-link">Cadastrar</router-link>
                <router-link to="/gerenciarWhitelists" class="gerenciar-whitelist-link">Gerenciar</router-link>
            </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Menu-burguer",
  data() {
    return {
      controller: null,
      menuAberto: false,
      menuTokensAberto: false,
      menuWhitelistsAberto: false
    }
  },
  methods: {
    toggleMenuTokens() {
      this.menuTokensAberto = !this.menuTokensAberto
      this.menuWhitelistsAberto = false
    },
    toggleMenuWhitelists() {
      this.menuWhitelistsAberto = !this.menuWhitelistsAberto
      this.menuTokensAberto = false
    }
  },

}
</script>

<style scoped src="./style-menu-burguer.css">

</style>