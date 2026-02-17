/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // ใช้ Relative path ตามแบบ Lab 6
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

  build: {
    rollupOptions: {
      output: {
        // แก้ปัญหาไฟล์ที่ขึ้นต้นด้วย _ แล้ว GitHub Pages ไม่โหลด (404)
        // ฟังก์ชันนี้จะลบเครื่องหมายขีดล่างออกจากหน้าชื่อไฟล์ assets ทั้งหมด
        sanitizeFileName(name) {
          const match = /^[a-z]:/i.exec(name);
          const driveLetter = match ? match[0] : '';
          return (
            driveLetter +
            name.slice(driveLetter.length).replace(/[\x00-\x1f\x7f<>*|" drilling :]/g, '_').replace(/^_+/, '')
          );
        },
      },
    },
  },
  
  test: {
    globals: true,
    environment: 'jsdom'
  }
})