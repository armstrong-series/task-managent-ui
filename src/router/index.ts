
import Login from '@/components/Login.vue';
import Dashboard from '@/components/Dashboard.vue';
import Task from '@/components/Task.vue';
import { createRouter, createWebHistory, type RouteRecordNormalized, type RouteRecordRaw } from 'vue-router';


  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
    },

    {
      path: '/tasks',
      name: 'Task',
      component: Task,
      meta: { requiresAuth: true },
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (!token) {
        next('/');
      } else {
        next();
      }
    } else {
      if (token && to.path === '/') {
        next('/dashboard');
      } else {
        next();
      }
    }
  });
  
  

export default router;