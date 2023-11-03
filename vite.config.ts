import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fin-the-pen-web/", // context path 설정
  server: {
    // port: 5173, // 개발 서버 포트. 기본은 5173 https://ko.vitejs.dev/config/server-options.html#server-port
    // https: false, // https://ko.vitejs.dev/config/server-options.html#server-https
    proxy: { //https://ko.vitejs.dev/config/server-options.html#server-https
      "/local": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/real/, ""),
      },
    }
  }
})
