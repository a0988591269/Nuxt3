import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 定義狀態
  // 可以使用箭頭函數或普通函數
  state: () => ({
    count: 0
  }),
  // 定義行為
  actions: {
    // 增加計數
    increment() {
      this.count += 1
    },
    // 減少計數
    decrement() {
      this.count -= 1
    }
  },
  // 定義計算屬性
  getters: {
    doubleCount: (state) => state.count * 2
  },
  // 持久化狀態
  // 使用 pinia-plugin-persistedstate 插件
  persist: {
    key: 'counter',
    storage: piniaPluginPersistedstate.localStorage() // 可以選擇使用 localStorage 或 sessionStorage
  }
})