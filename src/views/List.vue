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
        <ion-card>
          <ion-card-header>
            <ion-card-title>Nome</ion-card-title>
          </ion-card-header>

          <ion-card-content>Preço</ion-card-content>
          <ion-button color="danger">DELETE</ion-button>
          <ion-button color="primary">EDIT</ion-button>
        </ion-card>
        <ion-button color="success" href="/add">ADD GAME</ion-button>
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
  },
});
</script>

<style scoped>
.bg-header {
  background-color: #424242;
  color: white;
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
