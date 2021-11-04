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
        <ion-item>
          <ion-label position="floating">Name</ion-label>
          <ion-input v-model="game.name" type="text"></ion-input>
        </ion-item>
        <br />
        <br />
        <ion-item>
          <ion-label position="floating">Price</ion-label>
          <ion-input
            v-model="game.price"
            type="number"
            min="0.01"
            step="0.01"
          ></ion-input>
        </ion-item>
        <br />
        <br />
        <ion-button @click="save()" href="/list" color="success"
          >SAVE GAME</ion-button
        >
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
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";

import { UserGame } from "@/composables/game";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  methods: {
    save() {
      /* console.log("botão clicado");
      console.log(this.game.name);
      console.log(this.game.price);
      console.log(this.game); */
      this.saveGame(this.game);
    },
  },
  setup() {
    const { game, saveGame } = UserGame();
    return {
      game,
      saveGame,
    };
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
