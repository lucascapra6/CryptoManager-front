import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home_component.vue'
import CadastrarJogos from '../components/GameTokens/Jogos/Cadastrar-Token/Cadastrar-Token_component'
import GerenciarJogos from '../components/GameTokens/Jogos/Gerenciar-Jogos/Gerenciar-Jogos_component.vue'
import CadastrarWhitelist from '../components/Whitelists/Cadastrar-Whitelist/Cadastrar-Whitelist_component'
import GerenciarWhitelists from '../components/Whitelists/Gerenciar-Whitelist/Gerenciar-Whitelists_components.vue'
import ModalGerenciamento from "../components/GameTokens/Jogos/Modal_gerenciamento/Modal-Gerenciamento-Jogos_component";
import modalGerenciamentoWL from "../components/Whitelists/Modal-Gerenciamento-WL/Modal-Gerenciamento-WL_component"


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home,
    beforeEnter: (to, from, next) => {
      console.log("Foi para Home")
      next()
    }
  },
  {
    path:'/cadastrarJogo',
    name:'CadastrarJogo',
    component: CadastrarJogos
  },
  {
    path:'/gerenciarJogos',
    name:'gerenciarJogos',
    component: GerenciarJogos,
    children: [
      {
        path:'/gerenciarJogos/:jogo',
        name:'jogo',
        component: ModalGerenciamento,
        props: true
      }
    ]
  },
  {
    path:'/cadastrarWhitelist',
    name:'cadastrarWhitelist',
    component: CadastrarWhitelist
  },
  {
    path:'/gerenciarWhitelists',
    name:'gerenciarWhitelists',
    component: GerenciarWhitelists,
    children: [
      {
        path:'/gerenciarWhitelists/:whitelist',
        name:'whitelist',
        component: modalGerenciamentoWL,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
