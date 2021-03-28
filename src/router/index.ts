import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Content from '../pages/Content.vue';
import Landing from '../pages/Landing.vue';
import Accounts from '../pages/Accounts.vue';
import Home from '../pages/Home.vue';

import db from '../firebase';

const auth= db.app.auth();

const routes: Array<RouteRecordRaw> = [
  {
    path: '/landing',
    component: Landing,
  },  
  {
    path: '/',
    component: Home,
    beforeEnter: async (to,from, next) => {      
      if(!auth.currentUser)
        auth.signInAnonymously().then(() => next() );
      return next();
    },
    children: [
      {
        path: '',
        redirect: '/landing'
      },
      {
        path: '/accounts',
        component: Accounts
      },
      {
        path: '/:view',
        component: Content
      }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
