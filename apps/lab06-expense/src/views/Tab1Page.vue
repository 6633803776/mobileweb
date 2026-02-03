<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>รายการทั้งหมด</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-content>
           <p>รายรับรวม: {{ totalIncome }}</p>
           <p>รายจ่ายรวม: {{ totalExpense }}</p>
        </ion-card-content>
      </ion-card>

      <ion-list>
        <ion-item button detail="true" v-for="item in expenses" :key="item.id" @click="goToEdit(item.id)">
          <ion-label>
            <h2>{{ item.title }}</h2>
            <p>{{ item.category }} | {{ item.note }}</p>
          </ion-label>
          <ion-note slot="end" :color="item.type === 'income' ? 'success' : 'danger'">
            {{ item.amount }}
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'vue-router';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNote, IonCard, IonCardContent } from '@ionic/vue';

const expenses = ref<any[]>([]);
const router = useRouter();

onMounted(() => {
  // ดึงข้อมูลแบบ Realtime เรียงตามวันที่ล่าสุด (desc)
  const q = query(collection(db, 'expenses'), orderBy('createdAt', 'desc'));
  
  onSnapshot(q, (snapshot) => {
    expenses.value = snapshot.docs.map(doc => ({
      id: doc.id, // สำคัญ! ต้องเอา ID ออกมาด้วยเพื่อใช้ส่งไปหน้าแก้ไข
      ...doc.data()
    }));
  });
});

// คำนวณรายรับรวม
const totalIncome = computed(() => 
  expenses.value.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0)
);

// คำนวณรายจ่ายรวม
const totalExpense = computed(() => 
  expenses.value.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0)
);

// ฟังก์ชันไปหน้าแก้ไข
const goToEdit = (id: string) => {
  // แก้ไข Path ให้ถูกต้องตาม Router ที่เราตั้งไว้ (/tabs/edit/ไอดี)
  router.push(`/tabs/edit/${id}`); 
};
</script>