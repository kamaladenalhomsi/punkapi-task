import Vue from 'vue'
// Beer Module

const state = () => ({
  beers: [],
  singleBeer: {}
})

const getters = {
  GET_ALL_BEERS: state => state.beers,
  GET_SINGLE_BEER: state => state.singleBeer
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
  },
  SET_SINGLE_BEER (state, beer) {
    state.singleBeer = beer
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
  },
  async getSingleBeerByName ({ commit }, beer_name) {
    const beer = await this.$api.fetchData({
      route: 'beers?' + this.$api.queryParams({
        beer_name
      })
    })
    commit('SET_SINGLE_BEER', beer[0])
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
