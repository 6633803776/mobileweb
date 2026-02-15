<template>
  <ion-page>
    <ion-content class="ion-padding profile-bg">
      <div class="profile-container" v-if="userData">
        <div class="avatar-section">
          <img :src="userData.photoUrl || 'https://ionicframework.com/docs/img/demos/avatar.svg'" class="profile-img" />
          <h2>{{ userData.displayName || 'Sweet User' }}</h2>
          <p class="role-text">Mobile Developer</p>
        </div>

        <ion-card class="info-card">
          <ion-card-content>
            <div class="info-item">
              <span class="label">UID</span>
              <span class="value">{{ userData.uid }}</span>
            </div>
            <div class="info-item">
              <span class="label">Email</span>
              <span class="value">{{ userData.email || 'N/A' }}</span>
            </div>
            <div class="info-item">
              <span class="label">Phone</span>
              <span class="value">{{ userData.phoneNumber || 'N/A' }}</span>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-button expand="block" shape="round" color="medium" class="logout-btn" @click="logout">Sign Out</ion-button>
      </div>
      <div v-else class="loading-text">Loading your profile... 🌸</div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/auth/auth-service';
import type { AuthUser } from '@/auth/auth-interface'; // [cite: 334]
import { IonPage, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/vue';

const router = useRouter();
const userData = ref<AuthUser | null>(null);

onMounted(async () => {
  userData.value = await authService.getCurrentUser(); // [cite: 331-333]
});

const logout = async () => {
  await authService.logout();
  router.push('/login');
};
</script>

<style scoped>
.profile-bg { --background: #fff0f5; }
.profile-container { display: flex; flex-direction: column; align-items: center; padding-top: 40px; }
.avatar-section { text-align: center; margin-bottom: 20px; }
.profile-img { width: 120px; height: 120px; border-radius: 50%; border: 4px solid #ffb6c1; object-fit: cover; box-shadow: 0 8px 16px rgba(255,182,193,0.4); }
.avatar-section h2 { color: #d87093; font-weight: bold; margin-top: 15px; margin-bottom: 5px; }
.role-text { color: #aaa; margin: 0; font-size: 0.9rem; }
.info-card { width: 100%; border-radius: 20px; box-shadow: 0 10px 20px rgba(255, 182, 193, 0.2); margin-bottom: 30px; }
.info-item { display: flex; flex-direction: column; padding: 10px 0; border-bottom: 1px solid #f0f0f0; }
.info-item:last-child { border-bottom: none; }
.label { font-size: 0.8rem; color: #ffb6c1; text-transform: uppercase; font-weight: bold; margin-bottom: 5px; }
.value { color: #555; font-size: 1rem; word-break: break-all; }
.logout-btn { width: 80%; --box-shadow: none; opacity: 0.8; }
.loading-text { text-align: center; margin-top: 50px; color: #d87093; }
</style>