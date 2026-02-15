<template>
  <ion-page>
    <ion-content class="ion-padding login-bg">
      <div class="login-container">
        <div class="header-text">
          <h1>Welcome 🌸</h1>
          <p>Sign in to continue to Lab07</p>
        </div>

        <ion-card class="modern-card">
          <ion-card-content>
            <div class="input-group">
              <ion-input v-model="email" label="Email" label-placement="floating" type="email" placeholder="you@example.com" class="custom-input"></ion-input>
              <ion-input v-model="password" label="Password" label-placement="floating" type="password" placeholder="••••••••" class="custom-input"></ion-input>
            </div>
            <ion-button expand="block" shape="round" class="action-btn" @click="loginEmail">Sign In</ion-button>

            <div class="divider"><span>OR</span></div>

            <ion-button expand="block" fill="outline" shape="round" color="dark" class="google-btn" @click="loginGoogle">
              <ion-icon slot="start" name="logo-google"></ion-icon>
              Sign in with Google
            </ion-button>

            <div class="phone-section">
              <p class="section-title">Sign in with Phone</p>
              <div id="recaptcha-container"></div> <div v-if="!verificationId">
                <ion-input v-model="phone" label="Phone No." label-placement="floating" type="tel" placeholder="+66812345678" class="custom-input"></ion-input>
                <ion-button expand="block" shape="round" fill="clear" @click="sendOTP">Get OTP</ion-button>
              </div>

              <div v-if="verificationId">
                <ion-input v-model="otp" label="OTP Code" label-placement="floating" type="number" placeholder="123456" class="custom-input"></ion-input>
                <ion-button expand="block" shape="round" color="success" class="action-btn" @click="verifyOTP">Verify OTP</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '@/auth/auth-service';
import { IonPage, IonContent, IonCard, IonCardContent, IonInput, IonButton, IonIcon } from '@ionic/vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const phone = ref('');
const otp = ref('');
const verificationId = ref('');

const loginEmail = async () => {
  try {
    await authService.loginWithEmailPassword({ email: email.value, password: password.value });
    router.push('/tabs/tab1'); // [cite: 329]
  } catch (error) { alert('Login Failed'); }
};

const loginGoogle = async () => {
  try {
    await authService.loginWithGoogle();
    router.push('/tabs/tab1'); // [cite: 329]
  } catch (error) { alert('Google Login Failed'); }
};

const sendOTP = async () => {
  try {
    const res = await authService.startPhoneLogin({ phoneNumberE164: phone.value });
    verificationId.value = res.verificationId;
  } catch (error) { alert('Failed to send OTP'); }
};

const verifyOTP = async () => {
  try {
    await authService.confirmPhoneCode({ verificationId: verificationId.value, verificationCode: otp.value });
    router.push('/tabs/tab1'); // [cite: 329]
  } catch (error) { alert('Invalid OTP'); }
};
</script>

<style scoped>
.login-bg { --background: #fff0f5; }
.login-container { display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 20px; }
.header-text { text-align: center; margin-bottom: 30px; color: #d87093; }
.header-text h1 { font-weight: bold; font-size: 2.5rem; margin-bottom: 5px; }
.modern-card { border-radius: 20px; box-shadow: 0 10px 20px rgba(255, 182, 193, 0.3); background: #ffffff; padding: 10px; }
.custom-input { --background: #fdf5f6; --padding-start: 15px; border-radius: 12px; margin-bottom: 15px; }
.action-btn { margin-top: 10px; font-weight: bold; }
.google-btn { margin-bottom: 20px; border-color: #ddd; }
.divider { text-align: center; margin: 20px 0; position: relative; }
.divider::before { content: ""; position: absolute; left: 0; top: 50%; width: 100%; height: 1px; background: #eee; z-index: 1; }
.divider span { background: #fff; padding: 0 10px; position: relative; z-index: 2; color: #aaa; font-size: 0.9rem; }
.phone-section { background: #fdf5f6; padding: 15px; border-radius: 15px; }
.section-title { text-align: center; font-size: 0.9rem; color: #d87093; margin-top: 0; margin-bottom: 15px; font-weight: bold; }
</style>