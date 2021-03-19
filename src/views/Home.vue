<template>
    <ion-page>
    <IonSplitPane content-id="main-content">
      <AppMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
    </ion-page>
</template>

<script lang="ts">
import { IonRouterOutlet, IonSplitPane} from '@ionic/vue';
import { defineComponent } from 'vue';
import AppMenu from '@/components/Menu.vue';

export default defineComponent({
  name: 'Home',
  components: {
    AppMenu,
    IonRouterOutlet, 
    IonSplitPane,
  }
});
</script>