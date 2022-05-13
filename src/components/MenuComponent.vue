<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-header>
      <ion-toolbar>
        <ion-title>I Got a Budget</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
            <ion-menu-toggle auto-hide="false" v-for="(p, i) in appPages" :key="i">
                <ion-item @click="selectedIndex = i" router-direction="root" :router-link="p.url" lines="none" detail="false" class="hydrated" :class="{ selected: selectedIndex === i }">
                <ion-icon  :slot-scope="start" :md ="p.icon"></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                </ion-item>
            </ion-menu-toggle>
      </ion-list>

      <ion-list id="favorites-list">
        <ion-list-header>Favorites</ion-list-header>

        <ion-item v-for="(label, index) in labels" lines="none" :key="index">
          <ion-icon
            slot="start"
            :ios="bookmarkOutline"
            :md="bookmarkSharp"
          ></ion-icon>
          <ion-label>{{ label }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import {
  gridOutline, walletOutline, trailSignOutline, pieChartOutline, peopleOutline, optionsOutline, bookmarkSharp, bookmarkOutline
} from "ionicons/icons";

const selectedIndex = ref(0);
const appPages = [
      { title: "Dashboard", url: "/Dashboard", icon: gridOutline },
      { title: "Accounts", url: "/Accounts", icon: walletOutline },
      { title: "Planning", url: "/Planning", icon: trailSignOutline},
      { title: "Contacts", url: "/Contacts", icon: peopleOutline },
      { title: "Reports", url: "/Reports", icon: pieChartOutline },
      { title: "Settings", url: "/Settings", icon: optionsOutline },
    ];

const AppMenu = defineComponent({
  mounted() {
    selectedIndex.value = 1;
    this.$router.push("/Accounts");
  },
  setup() {
    
    const labels = ["AMEX", "Cash"];

    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      selectedIndex.value = appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }

    const route = useRoute();

    return {
      selectedIndex,
      appPages,
      labels, bookmarkSharp, bookmarkOutline,
      isSelected: (url) => (url === route.path ? "selected" : ""),
    };
  },
  components: {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
  },
});

export default AppMenu;
</script>

<style scoped>
ion-menu ion-content {
  --background: var(--ion-item-background, var(--ion-background-color, #fff));
}

ion-menu.md ion-content {
  /* --padding-start: 8px;
  --padding-end: 8px; */
  --padding-top: 20px;
  --padding-bottom: 20px;
}

ion-menu.md ion-list {
  padding: 20px 0;
}

ion-menu.md ion-note {
  margin-bottom: 30px;
}

ion-menu.md ion-list-header,
ion-menu.md ion-note {
  padding-left: 10px;
}

ion-menu.md ion-list#inbox-list {
  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);
}

ion-menu.md ion-list#inbox-list ion-list-header {
  font-size: 22px;
  font-weight: 600;

  min-height: 20px;
}

ion-menu.md ion-list#labels-list ion-list-header {
  font-size: 16px;

  margin-bottom: 18px;

  color: #757575;

  min-height: 26px;
}

ion-menu.md ion-item {
  --padding-start: 10px;
  --padding-end: 10px;
  --transition: none;
  margin-right: 10px;

  border-radius: 0 50px 50px 0;
}

ion-menu.md ion-item.selected {
  --background: rgba(var(--ion-color-primary-rgb), 0.14);
}

ion-menu.md ion-item.selected ion-label {
  font-weight: bolder;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.md ion-item ion-icon {
  color: #616e7e;
}

ion-menu.md ion-item ion-label {
  font-weight: 500;
}

ion-menu.ios ion-content {
  --padding-bottom: 20px;
}

ion-menu.ios ion-list {
  padding: 20px 0 0 0;
}

ion-menu.ios ion-note {
  line-height: 24px;
  margin-bottom: 20px;
}

ion-menu.ios ion-item {
  --padding-start: 16px;
  --padding-end: 16px;
  --min-height: 50px;
}

ion-menu.ios ion-item.selected ion-icon {
  color: var(--ion-color-primary);
}

ion-menu.ios ion-item ion-icon {
  font-size: 24px;
  color: #73849a;
}

ion-menu.ios ion-list#labels-list ion-list-header {
  margin-bottom: 8px;
}

ion-menu.ios ion-list-header,
ion-menu.ios ion-note {
  padding-left: 16px;
  padding-right: 16px;
}

ion-menu.ios ion-note {
  margin-bottom: 8px;
}

ion-note {
  display: inline-block;
  font-size: 16px;

  color: var(--ion-color-medium-shade);
}

ion-item.selected {
  --color: var(--ion-color-primary);
}
</style>