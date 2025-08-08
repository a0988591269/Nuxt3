<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-sky-400">{{ title }}</h1>
      <p class="mt-4 text-9xl font-bold text-gray-600">{{ name }}</p>
    </div>
  </div>
</template>

<script setup>
const year = 2025
const title = `${year} iThome 鐵人賽`
const name = 'Benson'
</script>