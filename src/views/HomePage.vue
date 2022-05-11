<template>
    <ion-page>
    <IonSplitPane content-id="main-content">
      <AppMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
    </ion-page>
</template>

<script>
import { IonRouterOutlet, IonSplitPane} from '@ionic/vue';
import { defineComponent } from 'vue';
import AppMenu from '@/components/MenuComponent.vue';
import { useAuth } from 'vca-firebase';


export default defineComponent({
  name: 'HomePage',
  setup() {
    const { uid, signInAnonymously} = useAuth()
    debugger;
      console.log("HomePage :"+uid.value);
      if(!uid.value) {
        signInAnonymously();
      }
    return {
      uid
    }
  },
  // beforeRouteEnter(to, from, next) {

  // }, 
  components: {
    AppMenu,
    IonRouterOutlet, 
    IonSplitPane,
  }
});
</script>