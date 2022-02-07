<template>
    <header class="menu">
      <p class="burguer">testfde</p>
      <nav class="menu-items">
        <router-link to="/" class="menu-item">Inicio</router-link>
        <div class="jogos-menu">
          <a class="menu-item jogos">Tokens</a>
          <div class="jogos-modal">
            <router-link to="/cadastrarJogo" class="cadastrar-jogo-link">Cadastrar</router-link>
            <router-link to="/gerenciarJogos" class="gerenciar-jogo-link">Gerenciar</router-link>
          </div>
        </div>
        <div class="whitelists-menu">
          <a class="menu-item">Whitelists</a>
          <div class="whitelists-modal">
            <router-link to="/cadastrarWhitelist" class="cadastrar-whitelist-link">Cadastrar</router-link>
            <router-link to="/gerenciarWhitelists" class="gerenciar-whitelist-link">Gerenciar</router-link>
          </div>
        </div>
      </nav>
    </header>
</template>
<script>
export default {
}
</script>

<style src="./style.css"></style>