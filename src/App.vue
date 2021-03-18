<template>
  <IonApp>
    <IonSplitPane content-id="main-content">
      <AppMenu />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </IonSplitPane>
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import AppMenu from './components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp, 
    AppMenu,
    IonRouterOutlet, 
    IonSplitPane,
  },

});
</script>