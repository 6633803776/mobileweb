<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab1"></ion-back-button>
        </ion-buttons>
        <ion-title>แก้ไขรายการ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
        <ion-item>
          <ion-input label="ชื่อรายการ" v-model="expense.title"></ion-input>
        </ion-item>
        
        <ion-item>
          <ion-input label="จำนวนเงิน" type="number" v-model="expense.amount"></ion-input>
        </ion-item>

        <ion-item>
            <ion-select label="ประเภท" v-model="expense.type" interface="popover">
                <ion-select-option value="income">รายรับ</ion-select-option>
                <ion-select-option value="expense">รายจ่าย</ion-select-option>
            </ion-select>
        </ion-item>

        <ion-item>
            <ion-input label="หมวดหมู่" v-model="expense.category"></ion-input>
        </ion-item>

        <ion-item>
            <ion-textarea label="หมายเหตุ" v-model="expense.note"></ion-textarea>
        </ion-item>

        <ion-button expand="block" class="ion-margin-top" @click="updateExpense">บันทึกการแก้ไข</ion-button>
        <ion-button expand="block" color="danger" class="ion-margin-top" @click="confirmDelete">ลบข้อมูล</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { alertController } from '@ionic/vue';

// ✅ เพิ่มส่วนนี้: Import Components ของ Ionic ให้ครบ ไม่งั้นหน้าจอจะ error
import { 
  IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, 
  IonContent, IonItem, IonInput, IonButton, IonSelect, IonSelectOption, IonTextarea 
} from '@ionic/vue';

const route = useRoute();
const router = useRouter();
const expenseId = route.params.id as string;
const expense = ref<any>({ title: '', amount: 0, type: 'expense', category: '', note: '' });

onMounted(async () => {
  try {
    const docRef = doc(db, 'expenses', expenseId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      expense.value = docSnap.data();
    }
  } catch (error) {
    console.error("Error loading document:", error);
  }
});

// ขั้นตอนที่ 5: แก้ไขข้อมูล (อัปเดตให้ครบทุกฟิลด์)
const updateExpense = async () => {
  try {
    const docRef = doc(db, 'expenses', expenseId);
    await updateDoc(docRef, {
      title: expense.value.title,
      amount: Number(expense.value.amount),
      type: expense.value.type,         // เพิ่ม type
      category: expense.value.category, // เพิ่ม category
      note: expense.value.note          // เพิ่ม note
    });
    router.back(); // กลับไปหน้าเดิม
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

// ขั้นตอนที่ 6: ลบข้อมูล พร้อมกล่องยืนยัน
const confirmDelete = async () => {
  const alert = await alertController.create({
    header: 'ยืนยันการลบ',
    message: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่?',
    buttons: [
      { text: 'ยกเลิก', role: 'cancel' },
      { 
        text: 'ลบ', 
        role: 'destructive',
        handler: async () => {
          await deleteDoc(doc(db, 'expenses', expenseId));
          router.back();
        }
      }
    ]
  });
  await alert.present();
};
</script>