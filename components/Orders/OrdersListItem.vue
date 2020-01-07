<template>
  <div class="my-5 p-5 bg-blue-300 rounded">
    <span class="font-bold text-lg">{{ item.number }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
