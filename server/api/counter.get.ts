export default defineEventHandler((event) => {
  let counter = getCookie(event, 'counter')

  counter = parseInt(counter ?? '0', 10) || 0
  counter += 1

  setCookie(event, 'counter', counter.toString())

  return { counter }
})