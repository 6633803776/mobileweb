// 1. แก้ import ตรงนี้ให้เรียกใช้ Hash History
import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'edit/:id',
        component: () => import('@/views/EditExpensePage.vue')
      }
    ]
  },
  // 2. ✅ เพิ่มส่วนนี้ไว้ท้ายสุด (กันเหนียว)
  // ถ้าหาหน้าไหนไม่เจอ ให้เด้งกลับไปหน้าแรกทันที (แก้จอขาว)
  {
    path: '/:pathMatch(.*)*',
    redirect: '/tabs/tab1'
  }
]

const router = createRouter({
  // 3. ใช้ Hash History (วงเล็บว่างเปล่า)
  history: createWebHashHistory(),
  routes
})

export default router