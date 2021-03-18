import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Content from '../views/Content.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/dashboard'
  },
  {
    path: '/:view',
    component: Content
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
