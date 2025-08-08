<template>
  <div class="flex flex-col items-center">
    <span class="mt-8 text-4xl text-gray-700">{{ count }}</span>
    <BaseButton
      class="mb-3 mb-sm-0"
      type="info"
      icon="fa fa-code"
      @click="increment">
      增加 1
    </BaseButton>
  </div>
</template>

<script setup>
const { count, increment } = useCounter()
</script>