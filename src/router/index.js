import { createRouter, createWebHistory } from '@ionic/vue-router';
import ContentView from '../views/ContentView.vue';
import LandingPage from '../views/LandingPage.vue';
import AccountsView from '../views/AccountsView.vue';
import HomePage from '../views/HomePage.vue';
//import { useAuth } from 'vca-firebase';


//import db from '../firebase';

//const auth= db.app.auth();
//const { uid, user, signInAnonymously} = useAuth()

const routes = [
  {
    path: '/landing',
    component: LandingPage,
  },  
  {
    path: '/',
    component: HomePage,
    // beforeEnter: async (to,from, next) => {
    //   console.log("HomePage :"+uid);
    //   if(!uid) {
    //     signInAnonymously();
    //     next();
    //   }
    //   //auth.signInAnonymously().then(() => next() );
    //   return next();
    // },
    children: [
      {
        path: '',
        redirect: '/landing'
      },
      {
        path: '/accounts',
        component: AccountsView
      },
      {
        path: '/:view',
        component: ContentView
      }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
