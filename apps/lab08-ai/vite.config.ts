/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // ย้าย base ออกมาไว้ด้านนอกสุดของ object
  base: '/mobileweb/lab8/', 
  
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