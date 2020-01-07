<template>
  <div class="max-w-full">
    <div class="mb-5 flex flex-row justify-center">
      <nuxt-link class="m-2 p-2 bg-gray-200 rounded hover:bg-blue-200" to="/">
        <span>Goods</span>
      </nuxt-link>

      <nuxt-link
        class="m-2 p-2 bg-gray-200 rounded hover:bg-blue-200"
        to="/orders"
      >
        <span>Orders</span>
      </nuxt-link>
    </div>

    <nuxt />
  </div>
</template>
