// https://github.com/rigor789/vue-scrollto
import VueScrollTo from 'vue-scrollto'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo)

  return {
    // Provide the scrollTo method globally
    // so it can be accessed via useNuxtApp().$scrollTo
    provide: {
      scrollTo: VueScrollTo.scrollTo
    }
  }
})