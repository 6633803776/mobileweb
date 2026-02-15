import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

// 1. เพิ่ม Import หน้า LoginPage และ authService ของเรา 
import LoginPage from '../views/LoginPage.vue';
import { authService } from '@/auth/auth-service';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  // 2. เพิ่ม Route สำหรับหน้า Login ที่เราเพิ่งสร้าง 
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/tabs/',
    component: TabsPage,
    // 3. ใส่ meta: { requiresAuth: true } เพื่อบังคับว่ากลุ่มหน้า Tabs ทั้งหมดต้องล็อกอินก่อน 
    meta: { requiresAuth: true }, 
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
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 4. เพิ่ม Router.beforeEach เพื่อทำหน้าที่เป็นยามเฝ้าประตู (Auth Guard) [cite: 312-321]
router.beforeEach(async (to) => {
  // ดึงข้อมูล User ปัจจุบันว่ามีล็อกอินค้างไว้ไหม [cite: 313]
  const user = await authService.getCurrentUser();

  // ถ้าพยายามจะเข้าหน้า login แต่ว่าล็อกอินอยู่แล้ว ให้เด้งไปหน้า tab1 เลย [cite: 314-316]
  if (to.path === '/login' && user) {
    return '/tabs/tab1';
  }

  // ถ้าหน้าที่จะไปบังคับว่าต้องล็อกอิน (requiresAuth) แต่ยังไม่มี user ให้เด้งไปบังคับล็อกอิน [cite: 317-319]
  if (to.meta.requiresAuth && !user) {
    return '/login';
  }

  // ถ้าผ่านเงื่อนไขด้านบนมาได้ ก็ปล่อยให้เข้าหน้านั้นๆ ได้ปกติ [cite: 321]
  return true; 
});

export default router;