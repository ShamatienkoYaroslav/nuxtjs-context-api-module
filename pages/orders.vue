<template>
  <div>
    <OrdersList :orders="orders" :loading="loading" />
  </div>
</template>

<script>
import OrdersList from '~/components/Orders/OrdersList'

export default {
  components: { OrdersList },

  computed: {
    orders() {
      return this.$store.state.orders.items
    },

    loading() {
      return this.$store.state.orders.loading
    }
  },

  async fetch({ store }) {
    await store.dispatch('orders/FETCH_ITEMS')
  }
}
</script>
