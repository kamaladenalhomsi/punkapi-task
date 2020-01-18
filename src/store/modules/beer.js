import Vue from 'vue'
// Beer Module

const state = () => ({
  beers: []
})

const getters = {
  GET_ALL_BEERS: state => state.beers
}

const mutations = {
  SET_BEERS (state, beers) {
    state.beers = beers
  },
  SET_BEER_IN_CART (state, index) {
    Vue.set(state.beers[index], 'inCart', true)
  },
  DELETE_BEER_FROM_CART (state, index) {
    Vue.set(state.beers[index], 'inCart', false)
  }
}

const actions = {
  async getAllBeers ({ commit }, params) {
    // Empty the beer state
    commit('SET_BEERS', [])
    const beers = await this.$api.fetchData({
      route: 'beers?' + this.$api.queryParams(params)
    })
    commit('SET_BEERS', beers)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
