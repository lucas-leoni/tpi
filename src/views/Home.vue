<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title class="bg-header">
          <div class="header">
            <h1>
              <a href="/"><b>GAMES</b>DB</a>
            </h1>
          </div>
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title class="bg-header" size="large"><b>GAMES</b>DB</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-button color="success" href="/add">ADD GAME</ion-button> <br />
        <br />
        <ion-button color="success" href="/list">LIST GAMES</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  },
});
</script>

<style scoped>
.bg-header {
  background-color: #424242;
}

a {
  text-decoration: none;
  color: white;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #303030;
}
</style>
