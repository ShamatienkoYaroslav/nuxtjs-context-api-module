<template>
  <div>
    <GoodsList :goods="goods" :loading="loading" />
  </div>
</template>

<script>
import GoodsList from '~/components/Goods/GoodsList'

export default {
  components: { GoodsList },

  computed: {
    goods() {
      return this.$store.state.goods.items
    },

    loading() {
      return this.$store.state.goods.loading
    }
  },

  async fetch({ store }) {
    await store.dispatch('goods/FETCH_ITEMS')
  }
}
</script>
