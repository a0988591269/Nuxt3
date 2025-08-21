<template>
  <div class="m-6 bg-slate-50 py-24">
    <ClientOnly>
      <div class="flex flex-col items-center">
        <Icon name="logos:nuxt" size="40" />
        <Icon class="h-12 w-12 text-yellow-400" name="heroicons:sun" />
        <FirstComponent />
        <div class="my-4 flex space-x-4">
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/about">前往 About</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/contact">前往 Contact</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/counter">前往 Counter</NuxtLink>
            </BaseButton>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/ofetch/fetch">前往 fetch</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/ofetch/useAsyncData">前往 useAsyncData</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/ofetch/useFetch">前往 useFetch</NuxtLink>
            </BaseButton>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/ref">前往 ref</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/useState">前往 useState</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/increment">前往 increment</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/surprise">前往 surprise</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/ref">前往 ref</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/count/useState">前往 useState</NuxtLink>
            </BaseButton>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/counter/increment">前往 increment</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/counter/surprise">前往 surprise</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/locale">前往 locale</NuxtLink>
            </BaseButton>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/pinia/counter">前往 pinia/counter</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/pinia/show">前往 pinia/show</NuxtLink>
            </BaseButton>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/config">前往 config</NuxtLink>
            </BaseButton>
            <p class="mt-4 text-2xl text-gray-600">theme.darkMode:</p>
            <span class="mt-4 text-3xl font-semibold text-blue-500">{{ theme.darkMode }}</span>
          </div>
          <div>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/login/googleCredential">前往 googleCredential</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/login/googleAuthToken">前往 googleAuthToken</NuxtLink>
            </BaseButton>
            <BaseButton tag="a" class="mb-3 mb-sm-0" type="info" icon="fa fa-code">
              <NuxtLink to="/login/googleAuthCode">前往 googleAuthCode</NuxtLink>
            </BaseButton>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <GoogleLogin :callback="callback" popup-type="TOKEN" prompt>
          <button
            class="flex rounded-md border border-gray-100 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span class="text-slate-500 group-hover:text-slate-600">使用 Google 進行登入</span>
          </button>
        </GoogleLogin>
        <!-- <GoogleLogin :callback="callback" /> -->
      </div>
      <template #fallback>
        <p class="my-6 flex justify-center">Loading...</p>
      </template>
    </ClientOnly>
    
    <div class="flex flex-col items-center">
      <JustClient />
      <ClientAndServer />
      <div class="mt-8 flex items-center">
        <input id="show-button" v-model="show" type="checkbox" class="h-5 w-5" >
        <label for="show-button" class="ml-2 block text-base text-slate-800">顯示報名按鈕</label>
      </div>
      <LazyBaseApplyRoundButton v-if="show" />
    </div>

    <div class="flex flex-col items-center overflow-y-visible px-6 py-4">
      <a v-scroll-to="'#element'" href="#" class="my-4 font-medium text-gray-600">
        捲動頁面至 #element
      </a>

      <button
        v-focus
        class="my-4 w-fit rounded-full bg-blue-500 px-8 py-3 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        @click="scrollToElement"
      >
        捲動頁面至 #element
      </button>

    <div id="element" class="mt-24">
      <h1 class="p-2 text-6xl font-semibold text-sky-400">這裡是 #element</h1>
    </div>

    <div class="h-screen w-full"/>
    </div>
  </div>
</template>

<script setup>
const show = ref(false)

const scrollToElement = () => {
  useNuxtApp().$scrollTo('#element')
}

const appConfig = useAppConfig()
const { theme } = appConfig

const callback = (response) => {
  console.log(response)
}

definePageMeta({
  middleware: defineNuxtRouteMiddleware(() => {
    console.log(`[匿名中間件] 我是直接定義在頁面內的匿名中間件`)
  })
})
</script>