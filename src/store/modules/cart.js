// Cart Module
const state = () => ({
  items: []
})

const getters = {
  GET_ITEMS: state => state.items,
  GET_CART_COUNT: state => state.items.length,
  IS_IN_CART: (state, getters, rootState) => {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === rootState.beer.singleBeer.id) {
        return true
      }
    }
    return false
  },
  IS_ITEM_IN_CART: state => {
    return id => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].id === id) {
          return true
        }
      }
      return false
    }
  }
}

const mutations = {
  ADD_TO_CART (state, item) {
    state.items.push(item)
  },
  DELETE_ITEM_FROM_CART (state, id) {
    for (let i = 0; i < state.items.length; i++) {
      if (state.items[i].id === id) {
        state.items.splice(i, 1)
        break
      }
    }
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
