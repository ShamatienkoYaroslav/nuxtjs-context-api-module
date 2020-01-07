<template>
  <div class="m-2 lg:m-10">
    <div class="font-extrabold text-4xl">Goods</div>

    <div>
      <div v-if="loading" class="font-extrabold text-2xl text-center">
        <span>Loading...</span>
      </div>

      <GoodsListItem v-else v-for="item in goods" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import GoodsListItem from '~/components/Goods/GoodsListItem'

export default {
  components: { GoodsListItem },

  props: {
    goods: {
      type: Array,
      default: () => []
    },
    loading: Boolean
  }
}
</script>
