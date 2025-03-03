import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    ...(process.env.NODE_ENV === 'development' ? {
    server: {
      proxy: {
        '/api': {
          // API 路由
          target: 'http://localhost:3000/', // 主要 Domain
          // target: 'https://backend-chat-2jso.onrender.com', // 主要 Domain
          changeOrigin: true,
        },
      },
    }}:{})
    
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.NUXT_PUBLIC_API_BASE_URL
    }
  }
})
