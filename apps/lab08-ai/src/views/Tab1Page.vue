<template>
  <ion-page class="pastel-theme">
    <ion-header class="ion-no-border">
      <ion-toolbar color="primary">
        <ion-title>Lab08: Gemini Vision ✨</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="glass-card">
        <input ref="fileEl" type="file" accept="image/*" hidden @change="onFileChange" />

        <div class="button-group">
          <ion-button class="btn-pastel pink" expand="block" @click="fileEl?.click()">
            <ion-icon slot="start" :icon="imageOutline"></ion-icon>
            เลือกไฟล์ภาพ
          </ion-button>
          
          <ion-button class="btn-pastel blue" expand="block" @click="onTakePhoto">
            <ion-icon slot="start" :icon="cameraOutline"></ion-icon>
            ถ่ายภาพ (Camera)
          </ion-button>
        </div>

        <div v-if="previewUrl" class="image-preview-container">
          <ion-img :src="previewUrl" class="preview-img" />
        </div>

        <ion-button 
          class="btn-analyze" 
          expand="block" 
          :disabled="!img || loading" 
          @click="onAnalyze"
        >
          <span v-if="!loading">วิเคราะห์ภาพด้วย AI</span>
          <ion-spinner v-else name="dots"></ion-spinner>
        </ion-button>

        <div v-if="result" class="result-box">
          <h3><ion-icon :icon="sparklesOutline"></ion-icon> ผลการวิเคราะห์</h3>
          <pre>{{ JSON.stringify(result, null, 2) }}</pre>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonButton, IonContent, IonHeader, IonImg, IonPage, IonSpinner, 
  IonTitle, IonToolbar, IonIcon
} from "@ionic/vue";
// นำเข้าไอคอน (เพื่อแก้ error ของไอคอนถ้ามี)
import { imageOutline, cameraOutline, sparklesOutline } from 'ionicons/icons';

import { PhotoService } from "../core/photo.service";
import { GeminiVisionService } from "../core/gemini.service";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";

// ตรวจสอบว่ามีตัวแปรเหล่านี้ครบถ้วน
const fileEl = ref<HTMLInputElement | null>(null);
const img = ref<Base64Image | null>(null);
const previewUrl = ref("");
const result = ref<ImageAnalysisResult | null>(null);
const loading = ref(false);

async function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;
  img.value = await PhotoService.fromFile(file);
  previewUrl.value = URL.createObjectURL(file);
  result.value = null;
}

async function onTakePhoto() {
  loading.value = true;
  try {
    const b64 = await PhotoService.fromCamera();
    img.value = b64;
    previewUrl.value = `data:${b64.mimeType};base64,${b64.base64}`;
    result.value = null;
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}

async function onAnalyze() {
  if (!img.value) return;
  loading.value = true;
  try {
    result.value = await GeminiVisionService.analyze(img.value);
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* พื้นหลังรวม */
.pastel-theme {
  --ion-background-color: #f0f4f8;
}

/* ปรับแต่ง Toolbar */
ion-toolbar {
  --background: linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%);
  --color: white;
  border-radius: 0 0 20px 20px;
}

/* Container ที่ทำหน้าที่เป็น Holder */
.glass-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* จัดกลุ่มปุ่ม */
.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

/* ปรับแต่งปุ่มให้โค้งมนและสีพาสเทล */
.btn-pastel {
  --border-radius: 20px;
  --box-shadow: none;
  font-weight: 600;
  flex: 1;
}

.pink {
  --background: #fbc2eb;
  --background-activated: #f8a5c2;
  color: #6d5b7b;
}

.blue {
  --background: #a1c4fd;
  --background-activated: #92b8f9;
  color: #5d6d7e;
}

/* ปุ่มวิเคราะห์ภาพ */
.btn-analyze {
  --background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  --border-radius: 25px;
  --box-shadow: 0 4px 15px rgba(143, 211, 244, 0.4);
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
}

/* ส่วนแสดงรูปภาพ */
.image-preview-container {
  border-radius: 25px;
  overflow: hidden;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  margin: 15px 0;
}

.preview-img {
  max-height: 300px;
  object-fit: cover;
}

/* กล่องแสดงผลลัพธ์ JSON */
.result-box {
  background: #ffffff;
  border-radius: 20px;
  padding: 15px;
  margin-top: 20px;
  border: 1px dashed #a1c4fd;
}

.result-box h3 {
  color: #778ca3;
  font-size: 1rem;
  margin-top: 0;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 0.85rem;
  color: #4b6584;
}
</style>