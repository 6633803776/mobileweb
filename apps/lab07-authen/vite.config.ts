/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mobileweb/lab07/', // 🌸 เพิ่มบรรทัดนี้ตรงนี้เลยครับ (ถ้าคุณใช้ชื่อโฟลเดอร์อื่นบน Git ก็เปลี่ยนคำว่า lab07 ได้เลยนะ)
  plugins: [
    vue(),
    
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})