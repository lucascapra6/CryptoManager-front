<template>
    <header class="menu">
      <menu-burguer class="burguer"></menu-burguer>
      <menu-desktop class="menu-item"></menu-desktop>
    </header>
</template>
<script>
import menuBurguer from './Menu-hamburguer'
import menuDesktop from './Menu-desktop'
export default {
  components: {
    menuDesktop,
    menuBurguer
  }
}
</script>

<style src="./style.css"></style>