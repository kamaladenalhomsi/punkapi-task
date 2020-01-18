import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '@/services/api'
import Beer from './modules/beer'

Vuex.Store.prototype.$api = ApiService

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    beer: Beer
  }
})
