<template>
  <div class="my-24 flex flex-col items-center">
    <span class="text-xl text-gray-400">[useAsyncData]</span>
    <span class="my-2 text-2xl text-gray-600">回傳資料:</span>
    <p class="my-4 text-xl font-semibold text-blue-500">{{ data }}</p>
    <p class="my-4 text-xl font-semibold text-blue-500">{{ status }}</p>
    <p class="my-4 text-xl font-semibold text-blue-500">{{ error }}</p>
    <button
      class="mt-6 rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      @click="refresh"
    >
      重新獲取資料
    </button>
    <button
      class="mt-6 rounded-md bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      @click="clear"
    >
      清除資料
    </button>
  </div>
</template>

<script setup>
const { data, status, error, refresh, clear } = await useAsyncData('about', () => $fetch('/api/about'))
</script>