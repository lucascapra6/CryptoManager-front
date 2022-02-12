<template>
  <div>
    <PageLoading v-if="pageLoading"></PageLoading>
    <section class="home">
      <article class="home-main-container">
        <main class="text-content">
          <h1>Crypto<span>Manager</span></h1>
          <p>Gerencie facilmente as entradas e saídas de seus GameTokens da rede BSC!</p>
          <button @click="controller.fazerLogin()" class="login-btn">Login</button>
        </main>
        <figure>
          <img src="../../assets/451253d81a55a06cc55363c70acf09b3-circulo-amarelo-do-cifrao.png" alt="cifrao">
        </figure>
      </article>
    </section>
  </div>
</template>

<script>
import HomeController from "./home_component.controller";
export default {
  name: "Home",
  data() {
    return {
      controller: null,
      login: null,
      pageLoading:false
    }
  },
  beforeMount() {
    this.controller = new HomeController(this)
  },
  mounted() {
    document.title = 'CryptoManager';
    this.pageLoading = true
    setTimeout(() => {this.pageLoading = false}, 1500)
  }
}
</script>

<style scoped src="./style.css"></style>