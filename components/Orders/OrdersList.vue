<template>
  <div class="m-2 lg:m-10">
    <div class="font-extrabold text-4xl">Orders</div>

    <div>
      <div v-if="loading" class="font-extrabold text-2xl text-center">
        <span>Loading...</span>
      </div>

      <OrdersListItem
        v-else
        v-for="item in orders"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import OrdersListItem from '~/components/Orders/OrdersListItem'

export default {
  components: { OrdersListItem },

  props: {
    orders: {
      type: Array,
      default: () => []
    },
    loading: Boolean
  }
}
</script>
