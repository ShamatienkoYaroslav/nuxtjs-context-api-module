export const state = () => ({
  items: [],
  loading: false
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },

  SET_LOADING(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  async FETCH_ITEMS({ commit }) {
    commit('SET_LOADING', true)

    const orders = await this.$api.orders.getOrders()
    commit('SET_ITEMS', orders)

    commit('SET_LOADING', false)
  }
}
