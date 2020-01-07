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

    const goods = await this.$api.goods.getGoods()
    commit('SET_ITEMS', goods)

    commit('SET_LOADING', false)
  }
}
