<template>
    <ion-page>
        <ion-content class="landing ion-padding">
            <ion-slides :options="slideOpts">
            <ion-slide class="last-slide">
                <ion-row style="padding-bottom: 30px">
                <ion-col size-md="12">
                    <img
                    type="image/png"
                    src="assets/images/logo.png"
                    class="auth-img"
                    />
                </ion-col>
                <ion-col size="12">
                    <ion-row>
                    <ion-col size="12">
                        <ion-text>
                        Registra tus ingresos y gastos en todas las monedas que sueles usar.
                        </ion-text>
                    </ion-col>
                    <ion-col size-md="4" size-xs="12"></ion-col>
                    <ion-col size-md="4" size-xs="12">
                        <ion-button expand="block" @click="navigateTo('/home')">
                        Start planning now
                        </ion-button>
                        <ion-button  fill="clear" expand="block" @click="navigateTo('/login')">Have an account? Login here</ion-button>
                    </ion-col>
                    <ion-col size-md="4" size-xs="12"></ion-col>
                    </ion-row>
                    
                </ion-col>
                </ion-row>
            </ion-slide>
            </ion-slides>
        </ion-content>
    </ion-page>
</template>


<script>
import { IonSlides, IonSlide, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";

const LandingPage = defineComponent({
    components: { IonSlides, IonSlide, IonPage },
    data: () =>  {
        return {
            slideOpts: {
                initialSlide: 1,
                speed: 400,
            }
        }
    },
  methods: {
    navigateTo(url) {
      this.$router.push(url);
    },
  },
});

export default LandingPage;
</script>