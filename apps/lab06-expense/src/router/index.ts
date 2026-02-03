import { createRouter, createWebHistory } from '@ionic/vue-router';
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
      // --- แก้ไขตรงนี้ครับ ---
      {
        // เปลี่ยนจาก tab3 เป็น edit/:id เพื่อรับค่า ID
        path: 'edit/:id',
        // เปลี่ยนชื่อไฟล์ที่เรียกใช้เป็น EditExpensePage.vue
        component: () => import('@/views/EditExpensePage.vue')
      }
      // --------------------
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router