// Beer Modules

const state = () => ({
  beers: []
})

const getters = {
  GET_ALL_BEERS: state => state.beers
}

const mutations = {
  SET_BEERS (state, beers) {
    state.beers = beers
  }
}

const actions = {
  async getAllBeers ({ commit }) {
    const beers = await this.$api.fetchData({
      route: 'beers'
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
