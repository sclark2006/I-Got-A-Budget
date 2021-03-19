import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
//import store from './store';
import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';
//import '@ionic/core/css/ionic.bundle.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Font Awesome Vue */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCreditCard,)

const app = createApp(App)
  .use(IonicVue)
  //.use(store)
  .use(router);

app.component('font-awesome-icon',FontAwesomeIcon)
router.isReady().then(() => {
  app.mount('#app');
});