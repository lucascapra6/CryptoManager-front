<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>
<script>
import Navigation from "./components/Navigation/Navigation_component";

export default {
  components: {
    Navigation
  },
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  background:linear-gradient(90deg, rgba(20,44,97,1) 0%, rgba(41,92,195,1) 46%, rgba(95,140,235,1) 73%, rgba(97,133,207,1) 89%, rgba(112,157,249,1) 100%);
}
input {
  text-align: center;
}
@font-face {
  font-family: 'Arcade Classic';
  src: url("assets/fonts/ARCADECLASSIC.TTF");
}
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&family=Paytone+One&family=Poppins:wght@400;500&display=swap');

.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}
</style>
