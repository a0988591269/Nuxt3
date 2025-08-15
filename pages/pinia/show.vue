<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <p class="mt-4 text-slate-500">這裡顯示的是 counterStore 的 doubleCount</p>
      <ClientOnly>
        <span class="text-9xl font-semibold text-emerald-600">{{ counterStore.doubleCount }}</span>
      </ClientOnly>
      <div class="mt-8">
        <NuxtLink to="/">回首頁</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// 已在 nuxt.config.ts 中設定了 stores 的自動導入
// import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>