<template>
    <main class="modal-gerenciar-jogos">
        <div class="modal-gerenciar-jogos-opcoes-container"
             v-show="!modal.atualizarBalanco && !modal.atualizarPrecoMedio && !modal.calcularROI">
          <div class="btn-fechar-modal-container">
            <router-link class="btn-fechar-modal" to="/gerenciarJogos">X</router-link>
          </div>
          <button class="btn-opcoes" @click="modal.atualizarBalanco = true">Atualizar Tokens Farmados</button>
          <button class="btn-opcoes" @click="modal.atualizarPrecoMedio = true">Atualizar Preço Médio</button>
          <button class="btn-opcoes" @click="controller.liquidar()">Liquidar</button>
          <button class="btn-opcoes" @click="modal.calcularROI = true">Configurar Cálculo de ROI</button>
        </div>

      <transition>
        <section class="modal-gerenciar-jogos-container" v-show="modal.atualizarBalanco">
          <figure class="btn-fechar-modal-container">
              <img class="seta-voltar" src="../../../../assets/120092_6a6a07e9242bb0d8ad002c8291552da2.png" @click="modal.atualizarBalanco = false">
          </figure>
          <h1 class="nomeToken">{{ acessoArray.nomeJogoSelecionado }}</h1>
          <label class="info-modal-jogos">Tokens adquiridos no dia: <input type="number"
                                                                           v-model="tokensFarmados"></label>
          <button @click="controller.atualizarTokensFarmados()" class="btn-confirmar">Confirmar</button>
        </section>
      </transition>

      <transition>
        <section class="modal-gerenciar-jogos-container" v-show="modal.atualizarPrecoMedio">
          <figure class="btn-fechar-modal-container">
            <img class="seta-voltar" src="../../../../assets/120092_6a6a07e9242bb0d8ad002c8291552da2.png" @click="modal.atualizarPrecoMedio = false">
          </figure>
          <h1 class="nomeToken">{{ acessoArray.nomeJogoSelecionado }}</h1>
          <label class="info-modal-jogos">Preço médio que adquiriu os Tokens: <input type="number"
                                                                                     v-model="novoPrecoMedio"></label>
          <button @click="controller.atualizarPrecoMedio()" class="btn-confirmar">Confirmar</button>
        </section>
      </transition>

      <transition>
        <section class="modal-gerenciar-jogos-container" v-show="modal.calcularROI">
          <figure class="btn-fechar-modal-container">
            <img class="seta-voltar" src="../../../../assets/120092_6a6a07e9242bb0d8ad002c8291552da2.png" @click="modal.calcularROI = false">
          </figure>
          <h1 class="nomeToken">{{ acessoArray.nomeJogoSelecionado }}</h1>
          <label class="info-modal-jogos">Média de tokens farmados por dia: <input type="number"
                                                                                   v-model="mediaTokensFarmadosDia"></label>
          <button @click="controller.calcularROI()" class="btn-confirmar">Confirmar</button>
        </section>
      </transition>
    </main>
</template>

<script>
import ModalGerenciamento from "./modal-gerenciamento-component.controller";
export default {
  name: "ModalGerenciamento",
  props: {
    acessoArray: Object,
    jogos: Array,
    apiPancake: Array
  },
  data() {
    return {
      controller: null,
      modal: {
        atualizarBalanco: false,
        atualizarPrecoMedio: false,
        calcularROI: false
      },
      tokensFarmados: null,
      novoPrecoMedio: null,
      mediaTokensFarmadosDia: null
    }
  },
  beforeMount() {
    this.controller = new ModalGerenciamento(this)
  }
}
</script>

<style scoped src="./style.css">
</style>