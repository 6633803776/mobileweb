<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lab09 Sensors</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="font-size: 4rem; margin: 0;">{{ state?.repDisplay ?? 0 }}</h1>
        <p style="font-size: 1.5rem; color: var(--ion-color-success);">คะแนน: {{ state?.stats.score ?? 0 }}</p>
        <p style="font-size: 1.2rem; color: var(--ion-color-danger);">{{ state?.stats.lastMessage }}</p>
      </div>

      <div v-if="state?.status === 'STOPPED'" style="background: #f4f5f8; padding: 15px; border-radius: 8px; margin-bottom: 20px; color: black;">
        <h3 style="margin-top: 0;">📊 สถิติการกายบริหาร</h3>
        <p>รอบทั้งหมด: <strong>{{ state.stats.repsTotal }}</strong></p>
        <p>รอบที่ถูก: <strong style="color: green;">{{ state.stats.repsok }}</strong></p>
        <p>รอบที่ผิด: <strong style="color: red;">{{ state.stats.repsBad }}</strong></p>
        <p>ความเร็วเฉลี่ย (Tempo): <strong>{{ state.stats.avgRepMs }} ms</strong></p>
        <p>ความแม่นยำ: <strong>{{ percentOk }}%</strong></p>
      </div>

      <ion-button expand="block" @click="start" :disabled="state?.status === 'RUNNING'">Start</ion-button>
      <ion-button expand="block" color="medium" @click="stop" :disabled="state?.status !== 'RUNNING'">Stop</ion-button>
    </ion-content>

    <ion-footer class="ion-padding">
      รหัสนักศึกษา 663380377-6 นายจักรพรรดิ์ ภูวิจิตร
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue";
// บรรทัดนี้แหละครับที่ทำให้มีหน้าตา UI สวยๆ ของ Ionic
import { 
  IonPage, IonHeader, IonToolbar, IonTitle, 
  IonContent, IonButton, IonFooter 
} from "@ionic/vue";

import { MotionService } from "../core/MotionService";
import { TtsService } from "../core/TtsService";
import { HapticsService } from "../core/HapticsService";
import { ArmWorkoutEngine } from "../core/ArmWorkoutEngine";
import type { WorkoutState } from "../core/types";

const state = ref<WorkoutState | null>(null);
const engine = new ArmWorkoutEngine();
const motion = new MotionService();
const tts = new TtsService();
const haptics = new HapticsService();

const percentOk = computed(() => {
  if (!state.value || state.value.stats.repsTotal === 0) return 0;
  return ((state.value.stats.repsok / state.value.stats.repsTotal) * 100).toFixed(2);
});

onMounted(() => {
  engine.onChange((s) => (state.value = s));
});

watch(
  () => state.value?.stats.repsTotal,
  (newTotal, oldTotal) => {
    if (newTotal !== undefined && oldTotal !== undefined && newTotal > oldTotal) {
      const currentStats = state.value!.stats;
      const currentRep = state.value!.repDisplay;

      if (currentStats.lastMessage === "OK") {
        haptics.success();
        tts.speak(currentRep.toString());
      } else if (currentStats.lastMessage) {
        haptics.warning();
        tts.speak(currentStats.lastMessage);
      }
    }
  }
);

async function start() {
  await tts.speak("เริ่มกายบริหารแขน ยกขึ้นจนสุดแล้วลดลง");
  engine.start();
  await motion.start((s) => engine.process(s));
}

async function stop() {
  await motion.stop();
  engine.stop();
}
</script>