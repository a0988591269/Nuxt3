<template>
  <div class="m-6 bg-slate-50 py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-sky-400">2025 Nuxt3</h1>
      <p class="mt-4 text-9xl font-bold text-gray-600">Benson</p>
    </div>
    <div class="flex flex-col items-center">
      <div class="my-4 flex space-x-4">
        <ClientOnly>
          <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
            <NuxtLink to="/about">前往 About</NuxtLink>
          </BaseButton>
          <template #fallback>
            <p class="my-6 flex justify-center">[BaseButton.vue] 元件載入中...</p>
          </template>
        </ClientOnly>
        <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
          <NuxtLink to="/contact">前往 Contact</NuxtLink>
        </BaseButton>
      </div>
    </div>
  </div>
</template>