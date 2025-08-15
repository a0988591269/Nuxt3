// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  imports: {
    autoImport: true,
    // 設定自動導入的組件
    // 配置掃描巢狀目錄
    // 指定要掃描的目錄和檔案
    // 這裡的 dirs 可以是單個目錄或多個目錄
    // 也可以是特定的檔案模式
    // 例如：'composables/*.{ts,js,mjs,mts}'
    // 這樣可以更精確地控制哪些檔案會被自動導入
    // 注意：這裡的 dirs 路徑是相對於 nuxt.config.ts 的位置
    dirs: [
      // 掃描 composables 目錄頂層
      // 'composables',
      // 掃描深度一層的特定檔案
      // 'composables/*/index.{ts,js,mjs,mts}',
      // 掃描整個 composables 目錄下的檔案
      'composables/**',
      'plugins/**',
      'stores',
    ]
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss', '~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  experimental: {
    // 實作實驗性的 <NuxtClientFallback> 元件，方便在SSR發生錯誤時在客戶端渲染內容。
    clientFallback: true
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    'nuxt-icons',
    '@pinia/nuxt',  // required
    'pinia-plugin-persistedstate/nuxt'
  ]
})