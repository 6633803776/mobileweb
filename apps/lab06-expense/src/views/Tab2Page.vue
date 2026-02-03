<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>บันทึกรายการ</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-item>
        <ion-input label="ชื่อรายการ" v-model="title" placeholder="เช่น ค่าข้าว"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="จำนวนเงิน" type="number" v-model="amount" placeholder="0"></ion-input>
      </ion-item>
      <ion-item>
        <ion-select label="ประเภท" v-model="type" interface="popover">
          <ion-select-option value="income">รายรับ</ion-select-option>
          <ion-select-option value="expense">รายจ่าย</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-input label="หมวดหมู่" v-model="category" placeholder="เช่น อาหาร, เดินทาง"></ion-input>
      </ion-item>
      <ion-item>
        <ion-textarea label="หมายเหตุ" v-model="note"></ion-textarea>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="saveExpense">
        บันทึกข้อมูล
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useRouter } from 'vue-router';
// ✅ 1. เพิ่ม alertController เข้ามาใน import
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonSelect, IonSelectOption, IonTextarea, IonButton, alertController } from '@ionic/vue';

const router = useRouter();
const title = ref('');
const amount = ref<number | null>(null);
const type = ref('expense');
const category = ref('');
const note = ref('');

const saveExpense = async () => {
  try {
    if (!title.value || !amount.value) {
      // แจ้งเตือนถ้ากรอกไม่ครบ
      const alert = await alertController.create({
        header: 'ข้อมูลไม่ครบ',
        message: 'กรุณากรอกชื่อรายการและจำนวนเงิน',
        buttons: ['ตกลง']
      });
      await alert.present();
      return;
    }

    // บันทึกลง Firebase
    await addDoc(collection(db, "expenses"), {
      title: title.value,
      amount: Number(amount.value),
      type: type.value,
      category: category.value,
      note: note.value,
      createdAt: new Date()
    });

    // ล้างข้อมูลในฟอร์ม
    title.value = '';
    amount.value = null;
    category.value = '';
    note.value = '';
    type.value = 'expense';

    // ✅ 2. แสดง Popup "บันทึกสำเร็จ"
    const successAlert = await alertController.create({
      header: 'เรียบร้อย!',
      subHeader: 'บันทึกข้อมูลสำเร็จ',
      message: 'ข้อมูลของคุณถูกเพิ่มลงในระบบแล้ว',
      buttons: [
        {
          text: 'ตกลง',
          handler: () => {
            // เมื่อกดปุ่ม "ตกลง" ถึงจะย้ายหน้า
            router.push('/tabs/tab1'); 
          }
        }
      ]
    });
    await successAlert.present();

  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>