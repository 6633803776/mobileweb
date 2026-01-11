<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Photo Gallery</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container" v-if="photos.length === 0">
        <p>จัดทำโดย: จักรพรรดิ์ ภูวิจิตร</p>
        <p>รหัสนักศึกษา: 663380377-6</p>
        <p><em>(กดปุ่มกล้องด้านล่างเพื่อเริ่มถ่ายรูป)</em></p>
      </div>

      <ion-grid>
        <ion-row>
          <ion-col size="6" :key="photo.filepath" v-for="photo in photos">
            <ion-img :src="photo.webviewPath"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { 
  IonPage, 
  IonHeader, 
  IonFab, 
  IonFabButton, 
  IonIcon, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonImg 
} from '@ionic/vue';

// เรียกใช้ Logic
import { usePhotoGallery } from '@/composables/usePhotoGallery';

// ดึงตัวแปร photos มาใช้ด้วย (เพิ่ม photos เข้ามา)
const { photos, takePhoto } = usePhotoGallery();

</script>

<style scoped>
#container {
  text-align: center;
  margin-top: 50px; /* ปรับให้ไม่ทับกับรูป */
}
</style>