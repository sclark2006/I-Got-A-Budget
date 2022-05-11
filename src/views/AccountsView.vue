<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons  slot="start">
          <ion-menu-button :auto-hide="true" color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Accounts</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Accounts</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container" v-show="accounts.length === 0">
        <strong class="capitalize">Accounts</strong>
        <p> Starting by creating a <ion-button>New Account</ion-button> </p>
      </div>
      <ion-list v-show="accounts.length > 0">
          <ion-item-group v-for="account in accounts" :key="account.name">
                <ion-item>
                    <ion-label> <h3>{{ account.name}}</h3> </ion-label>
                </ion-item>
          </ion-item-group>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButtons, IonButton, IonList, IonItem, IonItemGroup, IonLabel, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useCollection, useAuth  } from 'vca-firebase';

export default defineComponent({
  name: 'AccountsView',
  setup() {
    const { uid } = useAuth()
    const { docs: accounts } = useCollection(`/users/${uid.value}/accounts`)

    return {
      accounts
    };
  },
  components: {
      IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList, IonLabel, IonItem, IonItemGroup
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>