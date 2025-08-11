export default defineNuxtRouteMiddleware((to, from) => {
  // if(to.params.id === '1') {
  //   return abortNavigation()
  // }
  console.log(`[nuxt3.global 全域中間件] to: ${to.path}, from: ${from.path}`)
  // return navigateTo('/')
})