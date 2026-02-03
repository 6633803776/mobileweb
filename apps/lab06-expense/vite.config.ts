/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // ✅ เพิ่มบรรทัดนี้ครับ: เพื่อให้ path เป็น relative (./) ไม่ใช่ absolute (/)
  // จะช่วยแก้ปัญหาจอขาวเวลาเอาไปวางในโฟลเดอร์ lab06 บน GitHub
  base: './', 

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